import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item52Component } from './item5-2.component';

describe('Item52Component', () => {
  let component: Item52Component;
  let fixture: ComponentFixture<Item52Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item52Component]
    });
    fixture = TestBed.createComponent(Item52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
