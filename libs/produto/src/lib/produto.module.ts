import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoRoutingModule } from './produto.routing';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [ProdutoComponent],
  exports: [ProdutoComponent],
  imports: [CommonModule, ProdutoRoutingModule],
})
export class ProdutoModule {
  // constructor(private injector: Injector) {
  //   const wc = createCustomElement(ProdutoComponent, { injector: this.injector });
  //   if (!customElements.get("microfrontend-produto")) {
  //     customElements.define("microfrontend-produto", wc);
  //   }
  // }

  // ngDoBootstrap() {}
}
