import { TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../shared-testing.module';
import { ErrorReportService } from './error-report.service';

describe('ErrorReportService', () => {
  let service: ErrorReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SharedTestingModule] });
    service = TestBed.inject(ErrorReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
