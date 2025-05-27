import { createReducer, on } from '@ngrx/store';
import { setAuthUser, unSetAuthUser } from './auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
    authUser: any | null;
}

export const initialState: AuthState = {
    authUser: null
}

export const authReducer = createReducer<AuthState>(
    initialState,
    on(setAuthUser, (state, {payload}) => ({
        ...state,
        authUser: payload
    })),
    on(unSetAuthUser, () => ({
        ...initialState,
        authUser: null
    }))
);

