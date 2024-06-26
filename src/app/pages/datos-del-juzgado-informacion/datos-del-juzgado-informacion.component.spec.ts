import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoGeneralExportarComponent } from './datos-del-juzgado-informacion.component';

describe('ArchivoGeneralExportarComponent', () => {
  let component: ArchivoGeneralExportarComponent;
  let fixture: ComponentFixture<ArchivoGeneralExportarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoGeneralExportarComponent]
    });
    fixture = TestBed.createComponent(ArchivoGeneralExportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
