/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
import { IpcMainEvent, dialog } from 'electron';
import { WindowApiConst } from 'shared-lib';
import * as si from 'systeminformation';

import {
	GraphicsInfoRequest,
	OnGraphicsInfo,
} from 'shared-lib/models/event-request-response';

export function graphicsInfoRequest(
	event: IpcMainEvent,
	args: GraphicsInfoRequest
) {
	console.log('Received request for graphics info');

	si.graphics()
		.then((data) => {
			// The 'controllers' property contains information about the video cards
			if (data.controllers && data.controllers.length > 0) {
				let ev: OnGraphicsInfo = {
					controllers: data.controllers as any,
				};
				// event.sender.send(WindowApiConst.ON_GRAPHICS_INFO, ev);
			}
		})
		.catch((error) => {
			// event.sender.send(WindowApiConst.ON_GRAPHICS_INFO, {
			// 	error: error,
			// });
		});
}