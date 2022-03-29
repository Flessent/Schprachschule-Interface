import { TestBed } from '@angular/core/testing';

import { SpracheService } from './sprache.service';

describe('SpracheService', () => {
  let service: SpracheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpracheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
