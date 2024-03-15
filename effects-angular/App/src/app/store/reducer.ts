import * as productActions from './actions';

import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
export const productReducer = createReducer(
  initialState,
  on(productActions.loadProductsSuccess, (state, { products }) => {
    return { ...state, products };
  }),
  on(productActions.loadProductsFailure, (state, { error }) => {
    console.error(error);
    return { ...state }; 
  })
);
