import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSekretaerComponent } from './list-sekretaer.component';

describe('ListSekretaerComponent', () => {
  let component: ListSekretaerComponent;
  let fixture: ComponentFixture<ListSekretaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSekretaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSekretaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
