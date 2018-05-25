import { TestBed, inject } from '@angular/core/testing';

import { NflService } from './nfl.service';

describe('NflService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NflService]
    });
  });

  it('should be created', inject([NflService], (service: NflService) => {
    expect(service).toBeTruthy();
  }));
});
