import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerStudentComponent } from './neuer-student.component';

describe('NeuerStudentComponent', () => {
  let component: NeuerStudentComponent;
  let fixture: ComponentFixture<NeuerStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
