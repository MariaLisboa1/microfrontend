import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from "./perfil/perfil.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PerfilComponent
      },
      {
        path: 'produto',
        loadChildren: () => import('@microfrontend/produto').then(m => m.ProdutoModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
