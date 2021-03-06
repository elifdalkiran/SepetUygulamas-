import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {ProductService} from './product/product.service';
import { CartComponent } from './cart/cart.component';
import { CartService} from './cart/service/cart.service';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'http://northwindapi.azurewebsites.net/api'
    },
    CartService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
