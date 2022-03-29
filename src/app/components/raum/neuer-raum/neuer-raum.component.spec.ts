import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerRaumComponent } from './neuer-raum.component';

describe('NeuerRaumComponent', () => {
  let component: NeuerRaumComponent;
  let fixture: ComponentFixture<NeuerRaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerRaumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerRaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
