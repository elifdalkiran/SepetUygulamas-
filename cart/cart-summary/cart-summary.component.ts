import { Component, OnInit, DoCheck } from '@angular/core';
import {CartService} from '../service/cart.service';
import {CartItem} from '../cart-item';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit, DoCheck {

  constructor(private  cartService: CartService) { } // Adım2
  totalCartItem: number; // Adım 3
  totalCartItemPrice: number; // Adım 4
  cartItems: CartItem[]; // Adım 5

  ngOnInit() {
    this.cartItems = this.cartService.list(); // Adım 6
  }
  ngDoCheck() { // Adım 7
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }

}
