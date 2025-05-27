import { ActionReducerMap } from '@ngrx/store';
import { counterFeaturedName, counterReducer, CounterState } from './counter/counter.reducer';
import { authFeatureName, AuthState,authReducer } from './auth-store/auth.reducer';

export interface RootState {
[counterFeaturedName]: CounterState;
[authFeatureName]: AuthState;
}

export const rootReducer: ActionReducerMap<RootState> = {
    [counterFeaturedName]: counterReducer,
    [authFeatureName]: authReducer
}