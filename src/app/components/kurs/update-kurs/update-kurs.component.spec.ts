import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKursComponent } from './update-kurs.component';

describe('UpdateKursComponent', () => {
  let component: UpdateKursComponent;
  let fixture: ComponentFixture<UpdateKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
