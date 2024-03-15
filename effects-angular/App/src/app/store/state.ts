import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  products: any[];
}

export const initialState: AppState = {
  products: [],
};

const getAppState = createFeatureSelector<AppState>('app');
export const getProducts = createSelector(
  getAppState,
  (state: AppState) => state.products
);
