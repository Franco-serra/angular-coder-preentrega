import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
<<<<<<< HEAD
import { UserProfileComponent } from './components/user-profile/user-profile.component';
=======
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
<<<<<<< HEAD
    data: { roles: ['admin'], title: 'Usuarios' }
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    data: { title: 'Mi Perfil' }
=======
    data: { roles: ['admin'] }
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { } 