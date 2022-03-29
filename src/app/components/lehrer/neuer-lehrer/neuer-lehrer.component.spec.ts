import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerLehrerComponent } from './neuer-lehrer.component';

describe('NeuerLehrerComponent', () => {
  let component: NeuerLehrerComponent;
  let fixture: ComponentFixture<NeuerLehrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuerLehrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerLehrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
