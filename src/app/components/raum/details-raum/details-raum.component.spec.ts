import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRaumComponent } from './details-raum.component';

describe('DetailsRaumComponent', () => {
  let component: DetailsRaumComponent;
  let fixture: ComponentFixture<DetailsRaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRaumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
