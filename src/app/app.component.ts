import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectAuthUser } from './core/store/auth-store/auth.selectors';
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
    private store: Store
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.authUser$ = this.store.select(selectAuthUser);
  }
}
