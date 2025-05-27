import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { setAuthUser, unSetAuthUser } from '../store/auth-store/auth.actions';
import { selectAuthUser, selectIsAuthenticated } from '../store/auth-store/auth.selectors';
import { AuthState } from '../store/auth-store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private store: Store<AuthState>
  ) {
    this.checkStoredUser();
  }

  private checkStoredUser(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user && user.token) {
          this.store.dispatch(setAuthUser({
            payload: {
              email: user.email,
              role: user.role || 'user',
              password: ''
            }
          }));
        } else {
          this.logout();
        }
      } catch (error) {
        this.logout();
      }
    }
  }

  login(email: string, password: string): Observable<any> {
    console.log('Attempting login with:', { email });
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(user => {
          console.log('Login response:', user);
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.store.dispatch(setAuthUser({
              payload: {
                email: email,
                role: user.role || 'user',
                password: ''
              }
            }));
          } else {
            throw new Error('Invalid response from server');
          }
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    localStorage.clear();
    this.store.dispatch(unSetAuthUser());
    setTimeout(() => {
      this.store.dispatch({ type: '[Auth] Reset State' });
    }, 0);
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated);
  }

  getToken(): string | null {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        return user?.token || null;
      } catch {
        return null;
      }
    }
    return null;
  }
} 