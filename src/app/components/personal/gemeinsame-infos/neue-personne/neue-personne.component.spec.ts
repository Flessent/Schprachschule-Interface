import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuePersonneComponent } from './neue-personne.component';

describe('NeuePersonneComponent', () => {
  let component: NeuePersonneComponent;
  let fixture: ComponentFixture<NeuePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuePersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
