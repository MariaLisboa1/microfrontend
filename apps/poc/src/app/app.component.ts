import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'microfrontend-root',
  template: `
  POC
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'poc';
}
