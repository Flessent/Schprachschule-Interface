import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLeiterComponent } from './details-leiter.component';

describe('DetailsLeiterComponent', () => {
  let component: DetailsLeiterComponent;
  let fixture: ComponentFixture<DetailsLeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLeiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
