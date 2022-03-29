import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRaumComponent } from './update-raum.component';

describe('UpdateRaumComponent', () => {
  let component: UpdateRaumComponent;
  let fixture: ComponentFixture<UpdateRaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRaumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
