import { TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../shared-testing.module';
import { PreferenceManager } from './preference-manager.service';

describe('PreferenceManager', () => {
  let service: PreferenceManager;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule],
    });
    service = TestBed.inject(PreferenceManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
