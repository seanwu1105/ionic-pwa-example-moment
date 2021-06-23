import { Inject, Injectable } from '@angular/core';
import {
  PreferenceManager,
  PREFERENCE_MANAGER,
} from '../preference/preference-manager';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  private readonly preferences = this.preferenceManager.getPreferences<PreferenceKey>(
    'OnboardingService'
  );

  readonly hasOnboarded$ = this.preferences.getBoolean$('hasOnboarded', false);

  readonly onboard$ = this.preferences.setBoolean$('hasOnboarded', true);

  constructor(
    @Inject(PREFERENCE_MANAGER)
    private readonly preferenceManager: PreferenceManager
  ) {}
}

type PreferenceKey = 'hasOnboarded';
