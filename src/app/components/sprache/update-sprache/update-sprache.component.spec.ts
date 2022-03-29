import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpracheComponent } from './update-sprache.component';

describe('UpdateSpracheComponent', () => {
  let component: UpdateSpracheComponent;
  let fixture: ComponentFixture<UpdateSpracheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSpracheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpracheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
