import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Cart, priceSummary } from '../models/object.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  cartData : Cart[]|undefined;
  priceSummary: priceSummary={
    productPrice:0,
    discount:0,
    tax:0,
    delivery:0,
    total:0
  }
  constructor(private productService : ProductService, private router: Router){

  }

  ngOnInit(): void {
    this.loadDetails();
  }
  removeToCart(cartId:number|undefined){
    cartId && this.cartData && this.productService.removeToCart(cartId).subscribe((result)=>{
      this.loadDetails();
    })
  }

  loadDetails(){
    this.productService.currentCart().subscribe((result)=>{
      this.cartData = result;
      console.warn(this.cartData);
      let productPrice=0;
      result.forEach((item)=>{
        if(item.quantity){
          productPrice = productPrice+ (+item.productPrice* +item.quantity)
        }       
      })
      this.priceSummary.productPrice = productPrice;
      this.priceSummary.discount = productPrice/10;
      this.priceSummary.tax = productPrice/10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = productPrice+(productPrice/10)+100-(productPrice/10);

      if(!this.cartData.length){
        this.router.navigate(['/'])
      }
    })
  }
  checkout(){
    this.router.navigate(['/checkout']);
  }

}
