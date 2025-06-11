import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: DashboardComponent,
    data: { title: 'Dashboard' }
=======
    component: DashboardComponent
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
