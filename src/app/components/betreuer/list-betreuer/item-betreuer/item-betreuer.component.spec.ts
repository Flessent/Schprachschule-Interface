import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBetreuerComponent } from './item-betreuer.component';

describe('ItemBetreuerComponent', () => {
  let component: ItemBetreuerComponent;
  let fixture: ComponentFixture<ItemBetreuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBetreuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBetreuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
