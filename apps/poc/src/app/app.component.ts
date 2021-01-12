import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'poc',
  template: `
  <div id="client-b">
  <div class="card">
    <div class="content">
      <a routerLink="poc/page1" queryParamsHandling="merge">Passenger Search</a> | <a routerLink="poc/page2" queryParamsHandling="merge">Details</a>
    </div>
  </div>
  <router-outlet></router-outlet>
</div>
  `,
  styles: [`
  #client-b { border: navy dashed 5px; padding: 10px }
`],
})
export class AppComponent {
  title = 'poc';

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      console.debug('params', params);
    });

    window.addEventListener('client-message', e => console.debug('client-message event', e));
  }
}
