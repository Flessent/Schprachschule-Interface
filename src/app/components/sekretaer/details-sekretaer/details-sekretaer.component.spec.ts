import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSekretaerComponent } from './details-sekretaer.component';

describe('DetailsSekretaerComponent', () => {
  let component: DetailsSekretaerComponent;
  let fixture: ComponentFixture<DetailsSekretaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSekretaerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSekretaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
