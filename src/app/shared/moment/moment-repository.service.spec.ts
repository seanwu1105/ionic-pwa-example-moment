import { TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../shared-testing.module';
import { MomentRepository } from './moment-repository.service';

describe('MomentRepository', () => {
  let service: MomentRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule],
    });
    service = TestBed.inject(MomentRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
