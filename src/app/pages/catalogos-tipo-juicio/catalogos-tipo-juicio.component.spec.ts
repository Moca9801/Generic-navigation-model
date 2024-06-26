import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosTipoJuicioComponent } from './catalogos-tipo-juicio.component';

describe('CatalogosTipoJuicioComponent', () => {
  let component: CatalogosTipoJuicioComponent;
  let fixture: ComponentFixture<CatalogosTipoJuicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogosTipoJuicioComponent]
    });
    fixture = TestBed.createComponent(CatalogosTipoJuicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
