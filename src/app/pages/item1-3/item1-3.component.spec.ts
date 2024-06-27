import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item13Component } from './item1-3.component';

describe('Item13Component', () => {
  let component: Item13Component;
  let fixture: ComponentFixture<Item13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item13Component]
    });
    fixture = TestBed.createComponent(Item13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
