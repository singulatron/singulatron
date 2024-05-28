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
import { Component } from '@angular/core';
import { LocaltronService } from '../services/localtron.service';
import { ElectronIpcService } from '../services/electron-ipc.service';
import { WindowApiConst } from 'shared-lib';
import { enableLogging, disableLogging } from '../app.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent {
	loggingEnabled = true;

	constructor(
		private localtron: LocaltronService,
		private ipcService: ElectronIpcService
	) {}

	async ngOnInit() {
		let logStatus = await this.localtron.appLogStatus();
		this.loggingEnabled = logStatus.enabled;
		if (!this.loggingEnabled) {
			console.log('Logging is disabled');
			this.ipcService.send(WindowApiConst.DISABLE_LOGGING_REQUEST, null);
		}
	}

	async toggleLogging() {
		if (this.loggingEnabled) {
			this.disableLog();
			return;
		}
		this.enableLog();
	}

	async enableLog() {
		this.loggingEnabled = true;
		await this.localtron.appLogEnable();
		let rsp = await this.localtron.appLogStatus();
		this.ipcService.send(WindowApiConst.ENABLE_LOGGING_REQUEST, null);
		this.loggingEnabled = rsp.enabled;
		enableLogging();
		console.log('Enabled logging');
	}

	async disableLog() {
		console.log('Disabled logging');
		disableLogging();
		this.loggingEnabled = false;
		await this.localtron.appLogDisable();
		let rsp = await this.localtron.appLogStatus();
		this.ipcService.send(WindowApiConst.DISABLE_LOGGING_REQUEST, null);
		this.loggingEnabled = rsp.enabled;
	}
}