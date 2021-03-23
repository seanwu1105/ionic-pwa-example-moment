import { PreferenceManager } from './preference-manager';

export abstract class PreferenceServiceBase<T extends string> {
  private readonly preferences = this.preferenceManager.getPreferences(this.id);

  constructor(
    readonly preferenceManager: PreferenceManager,
    readonly id: string
  ) {}

  protected getBoolean$(key: T, defaultValue = false) {
    return this.preferences.getBoolean$(key, defaultValue);
  }

  protected getNumber$(key: T, defaultValue = 0) {
    return this.preferences.getNumber$(key, defaultValue);
  }

  protected getString$(key: T, defaultValue = '') {
    return this.preferences.getString$(key, defaultValue);
  }

  protected setBoolean$(key: T, value: boolean) {
    return this.preferences.setBoolean$(key, value);
  }

  protected setNumber$(key: T, value: number) {
    return this.preferences.setNumber$(key, value);
  }

  protected setString$(key: T, value: string) {
    return this.preferences.setString$(key, value);
  }
}
