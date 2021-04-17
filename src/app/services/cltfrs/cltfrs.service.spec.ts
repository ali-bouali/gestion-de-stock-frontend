import { TestBed } from '@angular/core/testing';

import { CltfrsService } from './cltfrs.service';

describe('CltfrsService', () => {
  let service: CltfrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CltfrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
