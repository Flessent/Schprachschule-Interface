import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSekretaerComponent } from './item-sekretaer.component';

describe('ItemSekretaerComponent', () => {
  let component: ItemSekretaerComponent;
  let fixture: ComponentFixture<ItemSekretaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSekretaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSekretaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
