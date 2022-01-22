import { TestBed } from '@angular/core/testing';

import { UserApisService } from './user-apis.service';

describe('UserApisService', () => {
  let service: UserApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
