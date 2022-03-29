import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeueSpracheComponent } from './neue-sprache.component';

describe('NeueSpracheComponent', () => {
  let component: NeueSpracheComponent;
  let fixture: ComponentFixture<NeueSpracheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeueSpracheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeueSpracheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
