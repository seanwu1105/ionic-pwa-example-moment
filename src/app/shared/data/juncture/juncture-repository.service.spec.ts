import { TestBed } from '@angular/core/testing';
import { JunctureRepository } from './juncture-repository.service';

describe('JunctureRepository', () => {
  let service: JunctureRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JunctureRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
