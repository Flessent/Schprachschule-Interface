import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerLeiterComponent } from './neuer-leiter.component';

describe('NeuerLeiterComponent', () => {
  let component: NeuerLeiterComponent;
  let fixture: ComponentFixture<NeuerLeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerLeiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerLeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
