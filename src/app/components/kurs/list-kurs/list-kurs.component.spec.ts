import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKursComponent } from './list-kurs.component';

describe('ListKursComponent', () => {
  let component: ListKursComponent;
  let fixture: ComponentFixture<ListKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
