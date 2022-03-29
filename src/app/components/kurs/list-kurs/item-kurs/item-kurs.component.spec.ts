import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemKursComponent } from './item-kurs.component';

describe('ItemKursComponent', () => {
  let component: ItemKursComponent;
  let fixture: ComponentFixture<ItemKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
