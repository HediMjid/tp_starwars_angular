import { TestBed } from '@angular/core/testing';

import { ServiceSwapiService } from './service-swapi.service';

describe('ServiceSwapiService', () => {
  let service: ServiceSwapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSwapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
