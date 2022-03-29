import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBetreuerComponent } from './list-betreuer.component';

describe('ListBetreuerComponent', () => {
  let component: ListBetreuerComponent;
  let fixture: ComponentFixture<ListBetreuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBetreuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBetreuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
