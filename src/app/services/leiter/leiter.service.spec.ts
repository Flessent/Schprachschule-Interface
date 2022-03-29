import { TestBed } from '@angular/core/testing';

import { LeiterService } from './leiter.service';

describe('LeiterService', () => {
  let service: LeiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
