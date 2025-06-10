import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth-store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        const mockResponse = {
          token: 'mock-token-123',
          role: email.toLowerCase().includes('admin') ? 'admin' : 'user',
          email: email
        };
        observer.next(mockResponse);
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getToken(): string | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user).token : null;
  }
} 