import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerBetreuerComponent } from './neuer-betreuer.component';

describe('NeuerBetreuerComponent', () => {
  let component: NeuerBetreuerComponent;
  let fixture: ComponentFixture<NeuerBetreuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerBetreuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerBetreuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
