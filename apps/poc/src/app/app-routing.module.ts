import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'poc/page1'},
  {
    path: 'poc', children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: "reload"})
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
