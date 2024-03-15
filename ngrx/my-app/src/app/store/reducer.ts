// reducer.ts

import { createReducer, on } from "@ngrx/store";
import { addUser, editUser, deleteUser } from "./action";

export interface User {
  id: number;
  name: string;
  message: string;
}

export let userReducer = createReducer(
  [{ name: '', id: 1, message: '' }],
  on(addUser, (state, { name, message }) => [
    ...state,
    { name, id: state.length + 1, message }
  ]),
  on(editUser, (state, { id, name, message }) =>
    state.map(user => (user.id === id ? { ...user, name, message } : user))
  ),
  on(deleteUser, (state, { id }) => state.filter(user => user.id !== id))
);
