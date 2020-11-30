import { TestBed } from '@angular/core/testing';

import { ExportdataService } from './exportdata.service';

describe('ExportdataService', () => {
  let service: ExportdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
