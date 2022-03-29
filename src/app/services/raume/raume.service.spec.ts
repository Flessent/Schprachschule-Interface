import { TestBed } from '@angular/core/testing';

import { RaumeService } from './raume.service';

describe('RaumeService', () => {
  let service: RaumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
