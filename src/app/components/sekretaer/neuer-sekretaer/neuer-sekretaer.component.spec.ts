import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerSekretaerComponent } from './neuer-sekretaer.component';

describe('NeuerSekretaerComponent', () => {
  let component: NeuerSekretaerComponent;
  let fixture: ComponentFixture<NeuerSekretaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerSekretaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerSekretaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
