import { AuthState } from './auth-store/auth.reducer';
import { UsersState } from '../../features/users/models/user.model';

export interface AppState {
  auth: AuthState;
  users: UsersState;
} 