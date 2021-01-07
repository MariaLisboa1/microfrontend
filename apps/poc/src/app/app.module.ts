import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    Page1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'poc/page1'},
      { path: 'poc', children: [
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
      ]},
      { path: '**', component: Page1Component }
    ], { useHash: true }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
