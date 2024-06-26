import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPermissionsComponent } from './admin-permissions.component';

describe('AdminPermissionsComponent', () => {
  let component: AdminPermissionsComponent;
  let fixture: ComponentFixture<AdminPermissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPermissionsComponent]
    });
    fixture = TestBed.createComponent(AdminPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
