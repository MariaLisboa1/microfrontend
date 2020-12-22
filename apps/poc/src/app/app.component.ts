import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoLazyLoadingService } from './produto-lazy-loading.service';

@Component({
  selector: 'microfrontend-root',
  template: `
  POC
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'poc';

  constructor(
    private produtoLazyService: ProdutoLazyLoadingService,
    private router: Router
  ) {
    this.router.initialNavigation();
  }
}
