import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),

    'Create User': props<{ user: Omit<User, 'id'> }>(),
    'Create User Success': props<{ user: User }>(),
    'Create User Failure': props<{ error: string }>(),

    'Update User': props<{ userId: number; user: Partial<User> }>(),
    'Update User Success': props<{ user: User }>(),
    'Update User Failure': props<{ error: string }>(),

    'Delete User': props<{ userId: number }>(),
    'Delete User Success': props<{ userId: number }>(),
    'Delete User Failure': props<{ error: string }>(),

    'Set Selected User': props<{ userId: number }>(),
    'Clear Selected User': emptyProps(),
  }
}); 