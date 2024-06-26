import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasFeDeErratasComponent } from './consultas-fe-de-erratas.component';

describe('ConsultasFeDeErratasComponent', () => {
  let component: ConsultasFeDeErratasComponent;
  let fixture: ComponentFixture<ConsultasFeDeErratasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasFeDeErratasComponent]
    });
    fixture = TestBed.createComponent(ConsultasFeDeErratasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
