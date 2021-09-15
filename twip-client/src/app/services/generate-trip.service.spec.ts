import { TestBed } from '@angular/core/testing';

import { GenerateTripService } from './generate-trip.service';

describe('GenerateTripService', () => {
  let service: GenerateTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
