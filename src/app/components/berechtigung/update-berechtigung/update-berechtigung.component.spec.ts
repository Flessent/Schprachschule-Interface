import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBerechtigungComponent } from './update-berechtigung.component';

describe('UpdateBerechtigungComponent', () => {
  let component: UpdateBerechtigungComponent;
  let fixture: ComponentFixture<UpdateBerechtigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBerechtigungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBerechtigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
