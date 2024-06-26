import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasCuadranteComponent } from './consultas-cuadrante.component';

describe('ConsultasCuadranteComponent', () => {
  let component: ConsultasCuadranteComponent;
  let fixture: ComponentFixture<ConsultasCuadranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasCuadranteComponent]
    });
    fixture = TestBed.createComponent(ConsultasCuadranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
