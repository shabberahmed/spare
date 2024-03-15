// action.ts

import { createAction, props } from "@ngrx/store";

export const addUser = createAction('Add User', props<{ name: string, message: string }>());
export const editUser = createAction('Edit User', props<{ id: number, name: string, message: string }>());
export const deleteUser = createAction('Delete User', props<{ id: number}>());
