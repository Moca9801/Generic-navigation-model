import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadranteReporteComponent } from './cuadrante-reporte.component';

describe('CuadranteReporteComponent', () => {
  let component: CuadranteReporteComponent;
  let fixture: ComponentFixture<CuadranteReporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadranteReporteComponent]
    });
    fixture = TestBed.createComponent(CuadranteReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
