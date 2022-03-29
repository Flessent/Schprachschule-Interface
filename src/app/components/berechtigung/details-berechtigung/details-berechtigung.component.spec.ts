import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBerechtigungComponent } from './details-berechtigung.component';

describe('DetailsBerechtigungComponent', () => {
  let component: DetailsBerechtigungComponent;
  let fixture: ComponentFixture<DetailsBerechtigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBerechtigungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBerechtigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
