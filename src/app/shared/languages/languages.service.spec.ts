import { TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../shared-testing.module';
import { LanguagesService } from './languages.service';

describe('LanguagesService', () => {
  let service: LanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SharedTestingModule] });
    service = TestBed.inject(LanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
