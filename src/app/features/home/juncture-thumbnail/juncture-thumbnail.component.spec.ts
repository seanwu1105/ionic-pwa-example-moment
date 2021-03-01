import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '../../../shared/shared-testing.module';
import { JunctureThumbnailComponent } from './juncture-thumbnail.component';

describe('JunctureThumbnailComponent', () => {
  let component: JunctureThumbnailComponent;
  let fixture: ComponentFixture<JunctureThumbnailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JunctureThumbnailComponent],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(JunctureThumbnailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
