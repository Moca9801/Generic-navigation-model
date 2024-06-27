import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item11Component } from './item1-1.component';

describe('Item11Component', () => {
  let component: Item11Component;
  let fixture: ComponentFixture<Item11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item11Component]
    });
    fixture = TestBed.createComponent(Item11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
