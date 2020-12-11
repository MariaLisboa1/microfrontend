import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilRoutingModule } from './perfil.routing';

@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule
  ],
  declarations: [PerfilComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilModule {}
