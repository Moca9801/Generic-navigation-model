import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrantePartesComponent } from './cuadrante-partes.component';

describe('CuadrantePartesComponent', () => {
  let component: CuadrantePartesComponent;
  let fixture: ComponentFixture<CuadrantePartesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadrantePartesComponent]
    });
    fixture = TestBed.createComponent(CuadrantePartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
