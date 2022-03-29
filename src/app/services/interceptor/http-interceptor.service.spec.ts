import { TestBed } from '@angular/core/testing';

import { HelloInterceptorService } from './hello-interceptor.service';

describe('HelloInterceptorService', () => {
  let service: HelloInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
