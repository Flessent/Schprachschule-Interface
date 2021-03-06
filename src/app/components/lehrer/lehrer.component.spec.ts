import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerComponent } from './lehrer.component';

describe('LehrerComponent', () => {
  let component: LehrerComponent;
  let fixture: ComponentFixture<LehrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LehrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
