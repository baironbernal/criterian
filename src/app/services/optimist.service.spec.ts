import { TestBed } from '@angular/core/testing';

import { OptimistService } from './optimist.service';

describe('OptimistService', () => {
  let service: OptimistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
