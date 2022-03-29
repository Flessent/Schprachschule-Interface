import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemeinsameInfosComponent } from './gemeinsame-infos.component';

describe('GemeinsameInfosComponent', () => {
  let component: GemeinsameInfosComponent;
  let fixture: ComponentFixture<GemeinsameInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemeinsameInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemeinsameInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
