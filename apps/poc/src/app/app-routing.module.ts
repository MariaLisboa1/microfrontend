import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: "reload"})
  ],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/abrir-conta"}
  ]
})
export class AppRoutingModule {}
