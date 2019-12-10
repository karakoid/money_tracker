import { TestBed } from '@angular/core/testing';

import { AddEditService } from './add-edit.service';

describe('AddEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEditService = TestBed.get(AddEditService);
    expect(service).toBeTruthy();
  });
});
