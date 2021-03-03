import { TestBed } from '@angular/core/testing';

import { WorkoutStorageService } from './workout-storage.service';

describe('WorkoutStorageService', () => {
  let service: WorkoutStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
