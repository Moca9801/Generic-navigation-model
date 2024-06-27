import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item51Component } from './item5-1.component';

describe('Item51Component', () => {
  let component: Item51Component;
  let fixture: ComponentFixture<Item51Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item51Component]
    });
    fixture = TestBed.createComponent(Item51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
