import { TestBed, inject } from '@angular/core/testing';

import { DbHelperService } from './db-helper.service';

describe('DbHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbHelperService]
    });
  });

  it('should be created', inject([DbHelperService], (service: DbHelperService) => {
    expect(service).toBeTruthy();
  }));
});
