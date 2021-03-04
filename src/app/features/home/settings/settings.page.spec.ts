import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '../../../shared/shared-testing.module';
import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SettingsPage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(SettingsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
