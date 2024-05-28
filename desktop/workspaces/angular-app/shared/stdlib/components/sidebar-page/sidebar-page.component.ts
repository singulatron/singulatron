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
import {
	Input,
	Component,
	ViewContainerRef,
	ViewChild,
	ChangeDetectorRef,
} from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'b-sidebar-page',
	templateUrl: './sidebar-page.component.html',
	styleUrls: ['./sidebar-page.component.css'],
})
export class SidebarPageComponent {
	id = Math.random().toString(36).substring(7);
	currentPath = '';

	@ViewChild('template', { static: true }) template;

	@Input() title: string;
	@Input() icon: string;
	@Input() noModal: boolean = false;
	@Input() appsModal: boolean = false;
	@Input() noBackButton: boolean = false;
	@Input() themeKey: string = '';

	constructor(
		private viewContainerRef: ViewContainerRef,
		public navCtrl: NavController,
		private router: Router,
		private cdr: ChangeDetectorRef,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activatedRoute.url
			.pipe(map((segments) => segments.join('/')))
			.subscribe((path) => {
				this.currentPath = path;
			});
		// this.viewContainerRef.createEmbeddedView(this.template);
	}

	rout = {
		activeEntry: '',
	};
}