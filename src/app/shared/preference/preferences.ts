import { Observable } from 'rxjs';

export interface Preferences<T extends string> {
  readonly id: string;
  getBoolean$(key: T, defaultValue?: boolean): Observable<boolean>;
  getNumber$(key: T, defaultValue?: number): Observable<number>;
  getString$(key: T, defaultValue?: string): Observable<string>;
  setBoolean$(key: T, value: boolean): Observable<boolean>;
  setNumber$(key: T, value: number): Observable<number>;
  setString$(key: T, value: string): Observable<string>;
}
