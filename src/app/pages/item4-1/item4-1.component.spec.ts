import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item41Component } from './item4-1.component';

describe('Item41Component', () => {
  let component: Item41Component;
  let fixture: ComponentFixture<Item41Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item41Component]
    });
    fixture = TestBed.createComponent(Item41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
