import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { usersFeature } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    StoreModule.forFeature(usersFeature),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule { } 