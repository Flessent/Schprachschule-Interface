import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeiterComponent } from './list-leiter.component';

describe('ListLeiterComponent', () => {
  let component: ListLeiterComponent;
  let fixture: ComponentFixture<ListLeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLeiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
