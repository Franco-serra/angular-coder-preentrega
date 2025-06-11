import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureName } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureName);

export const selectAuthUser = createSelector(
    selectAuthState,
    (state) => state.authUser
);

<<<<<<< HEAD
export const selectCurrentUser = selectAuthUser;

=======
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state) => !!state.authUser
);

export const selectAuthError = createSelector(
    selectAuthState,
    (state) => state.error
);

export const selectAuthLoading = createSelector(
    selectAuthState,
    (state) => state.loading
);

export const selectIsAdmin = createSelector(
    selectAuthUser,
    (user) => user?.role === 'admin'
); 