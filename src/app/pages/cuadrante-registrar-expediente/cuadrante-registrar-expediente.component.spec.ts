import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadranteRegistrarExpedienteComponent } from './cuadrante-registrar-expediente.component';

describe('CuadranteRegistrarExpedienteComponent', () => {
  let component: CuadranteRegistrarExpedienteComponent;
  let fixture: ComponentFixture<CuadranteRegistrarExpedienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadranteRegistrarExpedienteComponent]
    });
    fixture = TestBed.createComponent(CuadranteRegistrarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
