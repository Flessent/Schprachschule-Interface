import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBerechtigungComponent } from './list-berechtigung.component';

describe('ListBerechtigungComponent', () => {
  let component: ListBerechtigungComponent;
  let fixture: ComponentFixture<ListBerechtigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBerechtigungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBerechtigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
