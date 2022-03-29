import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerKursComponent } from './neuer-kurs.component';

describe('NeuerKursComponent', () => {
  let component: NeuerKursComponent;
  let fixture: ComponentFixture<NeuerKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
