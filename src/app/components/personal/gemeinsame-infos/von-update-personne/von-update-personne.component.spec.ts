import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VonUpdatePersonneComponent } from './von-update-personne.component';

describe('VonUpdatePersonneComponent', () => {
  let component: VonUpdatePersonneComponent;
  let fixture: ComponentFixture<VonUpdatePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VonUpdatePersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VonUpdatePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
