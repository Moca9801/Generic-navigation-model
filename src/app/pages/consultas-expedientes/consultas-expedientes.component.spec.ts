import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasExpedientesComponent } from './consultas-expedientes.component';

describe('ConsultasExpedientesComponent', () => {
  let component: ConsultasExpedientesComponent;
  let fixture: ComponentFixture<ConsultasExpedientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasExpedientesComponent]
    });
    fixture = TestBed.createComponent(ConsultasExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
