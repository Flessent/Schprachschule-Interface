import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeueBerechtigungComponent } from './neue-berechtigung.component';

describe('NeueBerechtigungComponent', () => {
  let component: NeueBerechtigungComponent;
  let fixture: ComponentFixture<NeueBerechtigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeueBerechtigungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeueBerechtigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
