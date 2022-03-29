import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeiterComponent } from './update-leiter.component';

describe('UpdateLeiterComponent', () => {
  let component: UpdateLeiterComponent;
  let fixture: ComponentFixture<UpdateLeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
