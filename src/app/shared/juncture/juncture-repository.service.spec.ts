import { TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../shared-testing.module';
import { JunctureRepository } from './juncture-repository.service';

describe('JunctureRepository', () => {
  let service: JunctureRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule],
    });
    service = TestBed.inject(JunctureRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
