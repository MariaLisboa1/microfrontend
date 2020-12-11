import { async, TestBed } from '@angular/core/testing';
import { ProdutoModule } from './produto.module';

describe('ProdutoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProdutoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProdutoModule).toBeDefined();
  });
});
