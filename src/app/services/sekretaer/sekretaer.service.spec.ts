import { TestBed } from '@angular/core/testing';

import { SekretaerService } from './sekretaer.service';

describe('SekretaerService', () => {
  let service: SekretaerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SekretaerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
