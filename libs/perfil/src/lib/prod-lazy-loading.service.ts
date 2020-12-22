import { Injectable, Injector, NgModuleFactoryLoader, NgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdLazyLoadingService {
  private moduleRef: NgModuleRef<any>;

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector
) {
}



load(): Promise<void> {

    if (this.moduleRef) {
        return Promise.resolve();
    }

    const path = 'libs/produto/src/lib/produto.module#ProdutoModule'
    return this
        .loader
        .load(path)
        .then(moduleFactory => {
            console.log("lazy loading service");

            this.moduleRef = moduleFactory.create(this.injector).instance;
            console.debug('moduleRef', this.moduleRef);
        })
        .catch(err => {
            console.error('error loading module', err);
        });

  }
}
