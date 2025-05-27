import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { unSetAuthUser } from '../../../core/store/auth-store/auth.actions';

@Component({
  selector: 'app-logout',
  template: '<div>Cerrando sesión...</div>',
  standalone: false
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.logout();
  }

  private logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
} 