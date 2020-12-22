import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilRoutingModule } from './perfil.routing';
import { ProdutoModule } from '@microfrontend/produto';

@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ProdutoModule
  ],
  declarations: [PerfilComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilModule {}
