import { BasketTotal, BasketItem } from './../shared/models/basket';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../shared/models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<Basket>;
  basketTotal$: Observable<BasketTotal>;

  
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basketTotal$ = this.basketService.basketTotal$;
  }

  removeBasketItem(item: BasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: BasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: BasketItem) {
    this.basketService.decrementItemQuantity(item);
  }
}
