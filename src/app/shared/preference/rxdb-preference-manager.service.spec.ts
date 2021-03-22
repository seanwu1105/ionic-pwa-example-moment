import { TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../shared-testing.module';
import { RxDbPreferenceManager } from './rxdb-preference-manager.service';

describe('RxDbPreferenceManager', () => {
  let service: RxDbPreferenceManager;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule],
    });
    service = TestBed.inject(RxDbPreferenceManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
