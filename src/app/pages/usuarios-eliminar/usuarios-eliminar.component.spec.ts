import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosEliminarComponent } from './usuarios-eliminar.component';

describe('UsuariosEliminarComponent', () => {
  let component: UsuariosEliminarComponent;
  let fixture: ComponentFixture<UsuariosEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosEliminarComponent]
    });
    fixture = TestBed.createComponent(UsuariosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
