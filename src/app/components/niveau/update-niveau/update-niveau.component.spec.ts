import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNiveauComponent } from './update-niveau.component';

describe('UpdateNiveauComponent', () => {
  let component: UpdateNiveauComponent;
  let fixture: ComponentFixture<UpdateNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
