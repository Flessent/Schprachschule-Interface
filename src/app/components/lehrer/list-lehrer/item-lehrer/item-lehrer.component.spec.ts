import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLehrerComponent } from './item-lehrer.component';

describe('ItemLehrerComponent', () => {
  let component: ItemLehrerComponent;
  let fixture: ComponentFixture<ItemLehrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLehrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
