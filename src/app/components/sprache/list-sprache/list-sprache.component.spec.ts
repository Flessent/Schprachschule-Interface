import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpracheComponent } from './list-sprache.component';

describe('ListSpracheComponent', () => {
  let component: ListSpracheComponent;
  let fixture: ComponentFixture<ListSpracheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpracheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpracheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
