import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekretaerComponent } from './sekretaer.component';

describe('SekretaerComponent', () => {
  let component: SekretaerComponent;
  let fixture: ComponentFixture<SekretaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekretaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SekretaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
