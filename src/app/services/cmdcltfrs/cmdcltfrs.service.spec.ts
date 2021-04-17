import { TestBed } from '@angular/core/testing';

import { CmdcltfrsService } from './cmdcltfrs.service';

describe('CmdcltfrsService', () => {
  let service: CmdcltfrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdcltfrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
