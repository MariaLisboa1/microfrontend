import { async, TestBed } from '@angular/core/testing';
import { PerfilModule } from './perfil.module';

describe('PerfilModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PerfilModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PerfilModule).toBeDefined();
  });
});
