import { TestBed } from '@angular/core/testing';

import { SsoulgmService } from './ssoulgm.service';

describe('SsoulgmService', () => {
  let service: SsoulgmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsoulgmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
