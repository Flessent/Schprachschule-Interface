import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBerechtigungComponent } from './item-berechtigung.component';

describe('ItemBerechtigungComponent', () => {
  let component: ItemBerechtigungComponent;
  let fixture: ComponentFixture<ItemBerechtigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBerechtigungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBerechtigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
