import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSekretaerComponent } from './update-sekretaer.component';

describe('UpdateSekretaerComponent', () => {
  let component: UpdateSekretaerComponent;
  let fixture: ComponentFixture<UpdateSekretaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSekretaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSekretaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
