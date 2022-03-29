import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerechtigungComponent } from './berechtigung.component';

describe('BerechtigungComponent', () => {
  let component: BerechtigungComponent;
  let fixture: ComponentFixture<BerechtigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerechtigungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerechtigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
