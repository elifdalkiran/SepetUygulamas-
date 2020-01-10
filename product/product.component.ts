import { Component, OnInit } from '@angular/core';
import { Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  loading: boolean = true;
  addedProduct: string;
  constructor(
    private productService: ProductService
  ) {
    /*let a = this.productService.getProduct();
    a.subscribe(value => {
      console.log(value);
    });*/
  }

  ngOnInit() {
    this.getProduct();
    this.loading =  false;
  }

  getProduct(){
    this.productService.getProduct().subscribe(response =>{
      this.products = response;
    });
  }
  addToCard(product: Product){
    this.addedProduct = product.productName
  }
}
