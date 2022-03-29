import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLehrerComponent } from './update-lehrer.component';

describe('UpdateLehrerComponent', () => {
  let component: UpdateLehrerComponent;
  let fixture: ComponentFixture<UpdateLehrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLehrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
