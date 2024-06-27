import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item32Component } from './item3-2.component';

describe('Item32Component', () => {
  let component: Item32Component;
  let fixture: ComponentFixture<Item32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item32Component]
    });
    fixture = TestBed.createComponent(Item32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
