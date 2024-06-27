import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item22Component } from './item2-2.component';

describe('Item22Component', () => {
  let component: Item22Component;
  let fixture: ComponentFixture<Item22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item22Component]
    });
    fixture = TestBed.createComponent(Item22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
