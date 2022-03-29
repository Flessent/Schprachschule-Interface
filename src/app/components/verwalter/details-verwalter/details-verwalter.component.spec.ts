import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVerwalterComponent } from './details-verwalter.component';

describe('DetailsVerwalterComponent', () => {
  let component: DetailsVerwalterComponent;
  let fixture: ComponentFixture<DetailsVerwalterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVerwalterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVerwalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
