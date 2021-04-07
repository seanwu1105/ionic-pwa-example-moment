import { Injectable } from '@angular/core';
import { PreferenceServiceBase } from '../preference/preference-service-base';
import { RxDbPreferenceManager } from '../preference/rxdb-preference-manager.service';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService extends PreferenceServiceBase<PreferenceKey> {
  readonly hasOnboarded$ = this.getBoolean$('hasOnboarded', false);

  readonly onboard$ = this.setBoolean$('hasOnboarded', true);

  constructor(preferenceManager: RxDbPreferenceManager) {
    super(preferenceManager, 'OnboardingService');
  }
}

type PreferenceKey = 'hasOnboarded';
