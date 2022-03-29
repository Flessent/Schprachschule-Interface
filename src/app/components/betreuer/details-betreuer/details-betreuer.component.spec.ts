import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBetreuerComponent } from './details-betreuer.component';

describe('DetailsBetreuerComponent', () => {
  let component: DetailsBetreuerComponent;
  let fixture: ComponentFixture<DetailsBetreuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBetreuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBetreuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
