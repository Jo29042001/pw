import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../models/object.model';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  menuType :string='default';
  sellerName: string="";
  userName: string="";
  shipperName: string="";
  searchResult: undefined|Products[];
  iconCart=faShoppingCart;
  cartItems=0;

  constructor(private router : Router, private productService : ProductService){

  }
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
    
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.username;
          this.menuType = 'seller'
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.username;
          this.menuType = 'user';
          this.productService.getCartList(userData.id);
        }
        else if (localStorage.getItem('shipper')) {
          let shipperStore = localStorage.getItem('shipper');
          let shipperData = shipperStore && JSON.parse(shipperStore)[0];
          this.shipperName = shipperData.username;
          this.menuType = 'shipper';
        } 
        else{
          this.menuType = 'default'
        }
      }
    });
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length
    }
    this.productService.cartData.subscribe((items)=>{
      this.cartItems = items.length;
    })
  }

  logOut(){
    localStorage.removeItem('seller')
    this.router.navigate(['/'])
  }
  shipperLogOut(){
    localStorage.removeItem('shipper')
    this.router.navigate(['/shipper-login'])
  }

  userLogout(){
    localStorage.removeItem('user')
    this.router.navigate(['/user-login'])
    this.productService.cartData.emit([]);
  }
  
  searchProducts(productName : KeyboardEvent){
    if(productName){
      const element = productName.target as HTMLInputElement;
      this.productService.searchProducts(element.value).subscribe((result)=>{
        if(result.length>5){
          result.length=length
        }

        this.searchResult = result;
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  redirectToDetails(id: number){
    this.router.navigate(['/details/'+id])
  }
  submitSearch(val:string){
    console.warn(val);
    this.router.navigate([`search/${val}`]);
  }


}
