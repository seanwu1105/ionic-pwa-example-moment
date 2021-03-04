import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AppComponent } from './app.component';
import { TestingDatabase } from './shared/database/database-testing.service';
import { Database } from './shared/database/database.service';

describe('AppComponent', () => {
  let platformReadySpy: Promise<void>;
  let platformSpy: Platform;

  beforeEach(
    waitForAsync(() => {
      platformReadySpy = Promise.resolve();
      platformSpy = jasmine.createSpyObj('Platform', {
        ready: platformReadySpy,
      });

      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [TranslocoTestingModule],
        providers: [
          {
            provide: Platform,
            useValue: platformSpy,
          },
          {
            provide: Database,
            useClass: TestingDatabase,
          },
        ],
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
  });

  // TODO: add more tests!
});
