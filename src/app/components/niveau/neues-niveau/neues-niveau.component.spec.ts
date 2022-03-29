import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuesNiveauComponent } from './neues-niveau.component';

describe('NeuesNiveauComponent', () => {
  let component: NeuesNiveauComponent;
  let fixture: ComponentFixture<NeuesNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuesNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuesNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
