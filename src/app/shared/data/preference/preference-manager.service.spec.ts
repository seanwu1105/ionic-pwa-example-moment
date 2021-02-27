import { TestBed } from '@angular/core/testing';
import { PreferenceManager } from './preference-manager.service';

describe('PreferenceManager', () => {
  let service: PreferenceManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferenceManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
