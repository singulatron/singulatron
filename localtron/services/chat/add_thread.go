/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package chatservice

import (
	"context"
	"errors"
	"time"

	"github.com/google/uuid"
	"github.com/singulatron/singulatron/localtron/logger"
	chattypes "github.com/singulatron/singulatron/localtron/services/chat/types"
	firehosetypes "github.com/singulatron/singulatron/localtron/services/firehose/types"
)

func (a *ChatService) addThread(chatThread *chattypes.Thread) (*chattypes.Thread, error) {
	if chatThread.Id == "" {
		chatThread.Id = uuid.New().String()
	}
	if chatThread.Title == "" {
		chatThread.Title = "New chat"
	}
	if chatThread.CreatedAt.IsZero() {
		chatThread.CreatedAt = time.Now()
	}
	if len(chatThread.UserIds) == 0 {
		return nil, errors.New("no user ids")
	}

	err := a.threadsStore.Create(chatThread)
	if err != nil {
		return nil, err
	}

	ev := chattypes.EventThreadAdded{
		ThreadId: chatThread.Id,
	}

	err = a.router.Post(context.Background(), "firehose-svc", "/publish", firehosetypes.PublishRequest{
		Event: &firehosetypes.Event{
			Name: ev.Name(),
			Data: ev,
		},
	}, nil)
	if err != nil {
		logger.Error("Failed to publish: %v", err)
	}

	return chatThread, nil
}
