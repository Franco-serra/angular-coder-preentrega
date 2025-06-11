import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
<<<<<<< HEAD
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    data: { title: 'Autenticación' }
=======
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./featured/dashboard/dashboard.module').then(m => m.DashboardModule),
<<<<<<< HEAD
    canActivate: [AuthGuard],
    data: { title: 'Dashboard' }
=======
    canActivate: [AuthGuard]
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  },
  {
    path: 'courses',
    loadChildren: () => import('./featured/courses/courses.module').then(m => m.CoursesModule),
<<<<<<< HEAD
    canActivate: [AuthGuard],
    data: { title: 'Cursos' }
=======
    canActivate: [AuthGuard]
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  },
  {
    path: 'students',
    loadChildren: () => import('./featured/students/alumnos.module').then(m => m.AlumnosModule),
<<<<<<< HEAD
    canActivate: [AuthGuard],
    data: { title: 'Estudiantes' }
=======
    canActivate: [AuthGuard]
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard],
<<<<<<< HEAD
    data: { title: 'Usuarios', roles: ['admin'] }
=======
    data: { roles: ['admin'] }
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


