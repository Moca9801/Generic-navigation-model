import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadranteRegistrarFechaComponent } from './cuadrante-registrar-fecha.component';

describe('CuadranteRegistrarFechaComponent', () => {
  let component: CuadranteRegistrarFechaComponent;
  let fixture: ComponentFixture<CuadranteRegistrarFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadranteRegistrarFechaComponent]
    });
    fixture = TestBed.createComponent(CuadranteRegistrarFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
