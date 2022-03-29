import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSpracheComponent } from './item-sprache.component';

describe('ItemSpracheComponent', () => {
  let component: ItemSpracheComponent;
  let fixture: ComponentFixture<ItemSpracheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSpracheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSpracheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
