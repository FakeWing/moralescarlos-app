import { TestBed } from '@angular/core/testing';

import { ApiserviciosService } from './apiservicios.service';

describe('ApiserviciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiserviciosService = TestBed.get(ApiserviciosService);
    expect(service).toBeTruthy();
  });
});
