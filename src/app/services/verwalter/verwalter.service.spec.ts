import { TestBed } from '@angular/core/testing';

import { VerwalterService } from './verwalter.service';

describe('VerwalterService', () => {
  let service: VerwalterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerwalterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
