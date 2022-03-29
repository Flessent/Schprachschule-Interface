import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerVerwalterComponent } from './neuer-verwalter.component';

describe('NeuerVerwalterComponent', () => {
  let component: NeuerVerwalterComponent;
  let fixture: ComponentFixture<NeuerVerwalterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerVerwalterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerVerwalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
