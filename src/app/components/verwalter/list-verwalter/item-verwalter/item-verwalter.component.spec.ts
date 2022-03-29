import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVerwalterComponent } from './item-verwalter.component';

describe('ItemVerwalterComponent', () => {
  let component: ItemVerwalterComponent;
  let fixture: ComponentFixture<ItemVerwalterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemVerwalterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVerwalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
