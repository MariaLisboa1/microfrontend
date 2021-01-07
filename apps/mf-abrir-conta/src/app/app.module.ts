import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PerfilComponent } from "@microfrontend/perfil";
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { PageWidgetComponent } from './page-widget/page-widget.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    PageWidgetComponent
  ],
  entryComponents: [
    PageWidgetComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'mf-abrir-conta/page1'},
      { path: 'mf-abrir-conta', children: [
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
      ]},
      { path: '**', component: Page1Component }
    ], { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const externalTileCE = createCustomElement(PageWidgetComponent, { injector: this.injector });
    customElements.define('client-a-widget', externalTileCE);
  }
}
