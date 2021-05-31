import { TestBed } from '@angular/core/testing';

import { Task.Service.TsService } from './task.service.ts.service';

describe('Task.Service.TsService', () => {
  let service: Task.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
