import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from './store/actions';
import { getProducts } from './store/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  products$ = this.store.select(getProducts);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.products$.subscribe((data)=>{
      console.log(data)
    })
  }


}
