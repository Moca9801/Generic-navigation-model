import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item14Component } from './item1-4.component';

describe('Item14Component', () => {
  let component: Item14Component;
  let fixture: ComponentFixture<Item14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item14Component]
    });
    fixture = TestBed.createComponent(Item14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
