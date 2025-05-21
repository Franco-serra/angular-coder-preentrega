import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.checkStoredUser();
  }

  private checkStoredUser(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user && user.token) {
          this.currentUserSubject.next(user);
        } else {
          this.logout();
        }
      } catch (error) {
        this.logout();
      }
    }
  }

  login(email: string, password: string): Observable<any> {
    console.log('Attempting login with:', { email, password });
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(user => {
          console.log('Login response:', user);
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
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
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    const currentUser = this.currentUserSubject.value;
    if (!currentUser || !currentUser.token) {
      this.logout();
      return false;
    }
    return true;
  }

  getToken(): string | null {
    const currentUser = this.currentUserSubject.value;
    return currentUser?.token || null;
  }

} 