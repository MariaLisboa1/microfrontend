import { TestBed } from '@angular/core/testing';

import { ProdutoLazyLoadingService } from './produto-lazy-loading.service';

describe('ProdutoLazyLoadingService', () => {
  let service: ProdutoLazyLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoLazyLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
