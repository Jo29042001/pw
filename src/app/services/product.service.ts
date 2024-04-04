import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Cart, Order, Products } from '../models/object.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData = new EventEmitter<Products[] | []>();

  constructor(private http : HttpClient) { }

  addProduct(data:Products){
    return this.http.post('http://localhost:3000/products',data);
  }
  productList(){
    return this.http.get<Products[]>('http://localhost:3000/products');
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id:string){
    return this.http.get<Products>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(products : Products){
    return this.http.put<Products>(`http://localhost:3000/products/${products.id}`,products)
  }
  
  trendyProducts(){
    return this.http.get<Products[]>("http://localhost:3000/products")
  }
  // searchProducts(query : string){
  //   return this.http.get<Products[]>(`http://localhost:3000/products?q=${query}`)
  // }
  searchProducts(productName:String){
    return this.http.get<Products[]>(`http://localhost:3000/products?productName=${productName}`)
  }
  localAddToCart(data: Products){
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]));
      this.cartData.emit([data]);
    }else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }
  removeItemFromCart(productId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items:Products[] = JSON.parse(cartData);
      items = items.filter((item:Products)=>productId!==item.id)
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
  addToCart(cartData:Cart){
    return this.http.post('http://localhost:3000/carts',cartData);
  }
  getCartList(userId:number){
    return this.http.get<Products[]>('http://localhost:3000/carts?userId='+userId,{
      observe:'response'
    }).subscribe((result)=>{
      if(result && result.body){
        this.cartData.emit(result.body);
      }
    })
  }
  removeToCart(cartId:number){
    return this.http.delete('http://localhost:3000/carts/'+cartId);
  }
  currentCart(){
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<Cart[]>('http://localhost:3000/carts?userId='+userData.id);
  }
  orderNow(data:Order){
    return this.http.post('http://localhost:3000/orders',data);
  }
  orderList(){
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<Order[]>('http://localhost:3000/orders?userId='+userData.id);
  }

  deleteCartItems(cartId:number){
    return this.http.delete('http://localhost:3000/carts/'+cartId).subscribe((result)=>{
    this.cartData.emit([]);
    })
  }

  cancelOrder(orderId:number){
    return this.http.delete('http://localhost:3000/orders/'+orderId)
  }
}