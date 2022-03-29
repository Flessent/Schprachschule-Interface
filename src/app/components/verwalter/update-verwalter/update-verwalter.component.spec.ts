import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVerwalterComponent } from './update-verwalter.component';

describe('UpdateVerwalterComponent', () => {
  let component: UpdateVerwalterComponent;
  let fixture: ComponentFixture<UpdateVerwalterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVerwalterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVerwalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
