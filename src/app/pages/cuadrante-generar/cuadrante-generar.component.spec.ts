import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadranteGenerarComponent } from './cuadrante-generar.component';

describe('CuadranteGenerarComponent', () => {
  let component: CuadranteGenerarComponent;
  let fixture: ComponentFixture<CuadranteGenerarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadranteGenerarComponent]
    });
    fixture = TestBed.createComponent(CuadranteGenerarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
