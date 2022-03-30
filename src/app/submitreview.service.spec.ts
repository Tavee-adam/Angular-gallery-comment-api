import { TestBed } from '@angular/core/testing';

import { SubmitreviewService } from './submitreview.service';

describe('SubmitreviewService', () => {
  let service: SubmitreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
