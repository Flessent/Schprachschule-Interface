import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLeiterComponent } from './item-leiter.component';

describe('ItemLeiterComponent', () => {
  let component: ItemLeiterComponent;
  let fixture: ComponentFixture<ItemLeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLeiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
