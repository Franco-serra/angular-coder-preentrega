import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../store/auth-store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(
      take(1),
      map(isAuthenticated => {
        if (!isAuthenticated) {
          console.log('Usuario no autenticado, redirigiendo a login');
          this.router.navigate(['/auth/login']);
          return false;
        }
        console.log('Usuario autenticado, permitiendo acceso');
        return true;
      })
    );
  }
} 