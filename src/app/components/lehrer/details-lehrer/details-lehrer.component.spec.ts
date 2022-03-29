import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLehrerComponent } from './details-lehrer.component';

describe('DetailsLehrerComponent', () => {
  let component: DetailsLehrerComponent;
  let fixture: ComponentFixture<DetailsLehrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLehrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
