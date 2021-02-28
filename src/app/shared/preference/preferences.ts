import { Observable } from 'rxjs';

export interface Preferences {
  readonly id: string;
  getBoolean$(key: string, defaultValue?: boolean): Observable<boolean>;
  getNumber$(key: string, defaultValue?: number): Observable<number>;
  getString$(key: string, defaultValue?: string): Observable<string>;
  setBoolean$(key: string, value: boolean): Observable<boolean>;
  setNumber$(key: string, value: number): Observable<number>;
  setString$(key: string, value: string): Observable<string>;
}
