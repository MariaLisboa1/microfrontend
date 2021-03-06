import { Component } from '@angular/core';

@Component({
  selector: "mf-abrir-conta",
  template: `
    <div id="client-a">
      <div class="card">
        <div class="content">
          <a routerLink="mf-abrir-conta/page1" queryParamsHandling="merge">Flight Search</a> | <a routerLink="mf-abrir-conta/page2" queryParamsHandling="merge">Advanced</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`#client-a { border: darkred dashed 5px; padding: 10px }`]
})
export class AppComponent {
  title = 'mf-abrir-conta';
}
