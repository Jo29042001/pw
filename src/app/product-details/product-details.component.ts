import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Cart, Products } from '../models/object.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productData : undefined|Products;
  productQuantity: number = 1;
  removeCart =false;
  cartData : Products|undefined;
  
  constructor(private route: ActivatedRoute, private productService : ProductService){

  }
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    productId && this.productService.getProduct(productId).subscribe((result)=>{
      this.productData = result;
      let cartData = localStorage.getItem('localCart')
      if(productId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:Products)=>productId===item.id.toString())
        if(items.length){
          this.removeCart = true;
        }else{
          this.removeCart = false;
        }
      }
      let user = localStorage.getItem('user');
      if(user){
        let userId  = user && JSON.parse(user).id;
        this.productService.getCartList(userId);
        this.productService.cartData.subscribe((result)=>{
          let item = result.filter((item:Products)=>productId?.toString()===item.productId?.toString())
          if(item.length){
            this.cartData = item[0];
            this.removeCart = true;
          }
        })
      }
      
    })
  }

  handleQuantity(val:string){
    if(this.productQuantity<30 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

  addToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.productService.localAddToCart(this.productData);
        this.removeCart = true;
      }else{
        let user = localStorage.getItem('user');
        let userId  = user && JSON.parse(user).id;
        let cartData : Cart = {
          ...this.productData,
          productId:this.productData.id,
          userId
        }
        delete cartData.id;
        this.productService.addToCart(cartData).subscribe((result)=>{
          if(result){
            this.productService.getCartList(userId);
            this.removeCart = true;
          }
        })
      }
    }
  }
  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
    this.productService.removeItemFromCart(productId)
   
    }else{
      console.warn('cart data', this.cartData);
      
      this.cartData && this.productService.removeToCart(this.cartData.id).subscribe((result)=>{
        let user = localStorage.getItem('user');
        let userId  = user && JSON.parse(user).id;
        this.productService.getCartList(userId);
      })
    }
    this.removeCart = false;
  }

  buyNow(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.productService.localAddToCart(this.productData);
        this.removeCart = true;
      }else{
        let user = localStorage.getItem('user');
        let userId  = user && JSON.parse(user).id;
        let cartData : Cart = {
          ...this.productData,
          productId:this.productData.id,
          userId
        }
        delete cartData.id;
        this.productService.addToCart(cartData).subscribe((result)=>{
          if(result){
            this.productService.getCartList(userId);
            this.removeCart = true;
          }
        })
      }
    }
  }
}
  

