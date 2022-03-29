import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerwalterComponent } from './list-verwalter.component';

describe('ListVerwalterComponent', () => {
  let component: ListVerwalterComponent;
  let fixture: ComponentFixture<ListVerwalterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVerwalterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerwalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
