import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRaumComponent } from './item-raum.component';

describe('ItemRaumComponent', () => {
  let component: ItemRaumComponent;
  let fixture: ComponentFixture<ItemRaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRaumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
