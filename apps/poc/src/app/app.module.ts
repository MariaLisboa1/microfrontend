import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { PerfilModule } from "@microfrontend/perfil";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfilModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: "/abrir-conta"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const wc = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define("microfrontend-root", wc)
  }

  ngDoBootstrap() {}
}
