import { TestBed } from '@angular/core/testing';

import { ApplicationGuardService } from './application-guard.service';

describe('ApplicationGuardService', () => {
  let service: ApplicationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
