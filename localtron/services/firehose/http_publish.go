/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package firehoseservice

import (
	"encoding/json"
	"fmt"
	"net/http"

	firehose "github.com/singulatron/singulatron/localtron/services/firehose/types"
	prompttypes "github.com/singulatron/singulatron/localtron/services/prompt/types"
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
)

// @Summary Publish an Event
// @Description Publishes an event to the firehose service after authorization check
// @Tags Firehose Svc
// @Accept json
// @Produce json
// @Param event body firehose.PublishRequest true "Event to publish"
// @Success 200 {object} nil "{}"
// @Failure 400 {object} firehose.ErrorResponse "Invalid JSON"
// @Failure 401 {object} firehose.ErrorResponse "Unauthorized"
// @Security BearerAuth
// @Router /firehose-svc/publish [post]
func (p *FirehoseService) Publish(w http.ResponseWriter,
	r *http.Request) {
	rsp := &usertypes.IsAuthorizedResponse{}
	err := p.router.AsRequestMaker(r).Post(r.Context(), "user-svc", fmt.Sprintf("/permission/%v/is-authorized", prompttypes.PermissionPromptCreate.Id), &usertypes.IsAuthorizedRequest{}, rsp)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if !rsp.Authorized {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	req := firehose.PublishRequest{}
	err = json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, `Invalid JSON`, http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	p.publish(req.Event)

	w.Write([]byte(`{}`))
}
