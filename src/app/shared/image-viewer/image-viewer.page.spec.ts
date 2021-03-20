import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '../shared-testing.module';
import { ImageViewerPage } from './image-viewer.page';

describe('ImageViewerPage', () => {
  let component: ImageViewerPage;
  let fixture: ComponentFixture<ImageViewerPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ImageViewerPage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(ImageViewerPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
