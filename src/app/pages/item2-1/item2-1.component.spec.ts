import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item21Component } from './item2-1.component';

describe('Item21Component', () => {
  let component: Item21Component;
  let fixture: ComponentFixture<Item21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item21Component]
    });
    fixture = TestBed.createComponent(Item21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
