import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectAuthUser } from './core/store/auth-store/auth.selectors';
import { AuthService } from './core/services/auth.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  title = 'angular-coder';
  isAuthenticated$: Observable<boolean>;
  authUser$: Observable<any>;

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.authUser$ = this.store.select(selectAuthUser);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
