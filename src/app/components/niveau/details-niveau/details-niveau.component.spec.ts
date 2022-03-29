import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNiveauComponent } from './details-niveau.component';

describe('DetailsNiveauComponent', () => {
  let component: DetailsNiveauComponent;
  let fixture: ComponentFixture<DetailsNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
