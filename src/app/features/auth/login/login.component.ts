import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setAuthUser } from '../../../core/store/auth-store/auth.actions';
import { selectAuthUser } from '../../../core/store/auth-store/auth.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  private authSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Subscribirse al estado del usuario
    this.authSubscription = this.store.select(selectAuthUser).subscribe(user => {
      if (user) {
        console.log('Usuario autenticado, redirigiendo a dashboard');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const { email, password } = this.loginForm.value;
      
      // Simulamos una respuesta exitosa ya que no tenemos backend
      const mockResponse = {
        token: 'mock-token-123',
        role: 'user'
      };

      // Dispatch la acción para guardar el usuario en el store
      this.store.dispatch(setAuthUser({
        payload: {
          email: email,
          role: mockResponse.role,
          password: ''
        }
      }));

      // Guardamos en localStorage
      localStorage.setItem('currentUser', JSON.stringify({
        ...mockResponse,
        email: email
      }));

      this.isLoading = false;
      // La redirección se maneja en el subscribe del ngOnInit
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente';
    }
  }
} 