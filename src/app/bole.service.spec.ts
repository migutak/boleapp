import { TestBed } from '@angular/core/testing';

import { BoleService } from './bole.service';

describe('BoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoleService = TestBed.get(BoleService);
    expect(service).toBeTruthy();
  });
});
