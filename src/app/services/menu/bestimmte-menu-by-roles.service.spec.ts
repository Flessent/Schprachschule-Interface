import { TestBed } from '@angular/core/testing';

import { BestimmteMenuByRolesService } from './bestimmte-menu-by-roles.service';

describe('BestimmteMenuByRolesService', () => {
  let service: BestimmteMenuByRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestimmteMenuByRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
