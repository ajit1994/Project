import { TestBed } from '@angular/core/testing';

import { Servicelist } from './servicelist.service';

describe('ServicelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Servicelist = TestBed.get(Servicelist);
    expect(service).toBeTruthy();
  });
});
