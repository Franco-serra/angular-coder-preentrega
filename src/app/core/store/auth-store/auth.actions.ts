import { createAction, props } from '@ngrx/store';

export const setAuthUser = createAction(
    '[Auth Component] Set Auth User',
    props<{ payload: {email: String; password: String; role: String;}}>()
)

export const unSetAuthUser = createAction('[Auth Component] Unset Auth User')
