import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item31Component } from './item3-1.component';

describe('Item31Component', () => {
  let component: Item31Component;
  let fixture: ComponentFixture<Item31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item31Component]
    });
    fixture = TestBed.createComponent(Item31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
