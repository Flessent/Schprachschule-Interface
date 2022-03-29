import { TestBed } from '@angular/core/testing';

import { BetreuerService } from './betreuer.service';

describe('BetreuerService', () => {
  let service: BetreuerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetreuerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
