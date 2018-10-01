import { TestBed } from '@angular/core/testing';

import { OtroEjemploService } from './otro-ejemplo.service';

describe('OtroEjemploService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtroEjemploService = TestBed.get(OtroEjemploService);
    expect(service).toBeTruthy();
  });
});
