import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBetreuerComponent } from './update-betreuer.component';

describe('UpdateBetreuerComponent', () => {
  let component: UpdateBetreuerComponent;
  let fixture: ComponentFixture<UpdateBetreuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBetreuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBetreuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
