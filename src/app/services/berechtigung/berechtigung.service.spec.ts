import { TestBed } from '@angular/core/testing';

import { BerechtigungService } from './berechtigung.service';

describe('BerechtigungService', () => {
  let service: BerechtigungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerechtigungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
