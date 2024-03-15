// src/app/+state/product.effects.ts

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../products.service';
import * as productActions from './actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.loadProducts ),
    switchMap(() => this.productService.getProducts()
      .pipe(
        map(products => productActions.loadProductsSuccess({ products })),
        catchError(error => of(productActions.loadProductsFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
