import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoGeneralLimpiarListaComponent } from './archivo-general-limpiar-lista.component';

describe('ArchivoGeneralLimpiarListaComponent', () => {
  let component: ArchivoGeneralLimpiarListaComponent;
  let fixture: ComponentFixture<ArchivoGeneralLimpiarListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivoGeneralLimpiarListaComponent]
    });
    fixture = TestBed.createComponent(ArchivoGeneralLimpiarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
