import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsKursComponent } from './details-kurs.component';

describe('DetailsKursComponent', () => {
  let component: DetailsKursComponent;
  let fixture: ComponentFixture<DetailsKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
