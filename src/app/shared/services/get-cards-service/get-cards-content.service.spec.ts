import { TestBed } from '@angular/core/testing';

import { GetCardsContentService } from './get-cards-content.service';

describe('GetCardsContentService', () => {
  let service: GetCardsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
