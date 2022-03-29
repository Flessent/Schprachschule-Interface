import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNiveauComponent } from './item-niveau.component';

describe('ItemNiveauComponent', () => {
  let component: ItemNiveauComponent;
  let fixture: ComponentFixture<ItemNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
