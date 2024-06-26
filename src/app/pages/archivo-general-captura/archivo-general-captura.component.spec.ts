import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoGeneralCapturaComponent } from './archivo-general-captura.component';

describe('ArchivoGeneralCapturaComponent', () => {
  let component: ArchivoGeneralCapturaComponent;
  let fixture: ComponentFixture<ArchivoGeneralCapturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoGeneralCapturaComponent]
    });
    fixture = TestBed.createComponent(ArchivoGeneralCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
