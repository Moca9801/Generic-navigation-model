import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item15Component } from './item1-5.component';

describe('Item15Component', () => {
  let component: Item15Component;
  let fixture: ComponentFixture<Item15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item15Component]
    });
    fixture = TestBed.createComponent(Item15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
