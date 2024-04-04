import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order, Products, Signup } from '../../models/object.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user_url:string = 'http://localhost:3000/users/';
  seller_url:string = 'http://localhost:3000/seller/';
  product_url:string = "http://localhost:3000/products/";
  order_url:string = 'http://localhost:3000/orders';
  shipper_url:string='http://localhost:3000/shippers';
  
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<Signup[]>(this.user_url);
  }
  getSellers(){
    return this.http.get<Signup[]>(this.seller_url);
  }
  getShippers(){
    return this.http.get<Signup[]>(this.shipper_url);
  }
  getProducts(){
    return this.http.get<Products[]>(this.product_url);
  }
  getOrders(){
    return this.http.get<Order[]>(this.order_url);
  }

  deleteUsers(id:number){
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  usersList(){
    return this.http.get<Signup[]>('http://localhost:3000/users');
  }
  getUser(id:string){
    return this.http.get<Signup>(`http://localhost:3000/users/${id}`);
  }
  updateUsers(user : Signup){
    return this.http.put<Signup>(`http://localhost:3000/users/${user.id}`,user)
  }

  deleteSellers(id:number){
    return this.http.delete(`http://localhost:3000/seller/${id}`);
  }
  sellersList(){
    return this.http.get<Signup[]>('http://localhost:3000/seller');
  }
  getSeller(id:string){
    return this.http.get<Signup>(`http://localhost:3000/seller/${id}`);
  }
  updateSellers(seller : Signup){
    return this.http.put<Signup>(`http://localhost:3000/seller/${seller.id}`,seller)
  }

  deleteShippers(id:number){
    return this.http.delete(`http://localhost:3000/shippers/${id}`);
  }
  shippersList(){
    return this.http.get<Signup[]>('http://localhost:3000/shippers');
  }
  getShipper(id:string){
    return this.http.get<Signup>(`http://localhost:3000/shippers/${id}`);
  }
  updateShippers(shipper : Signup){
    return this.http.put<Signup>(`http://localhost:3000/shippers/${shipper.id}`,shipper)
  }
  deleteProducts(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  productsList(){
    return this.http.get<Products[]>('http://localhost:3000/products');
  }
  getProduct(id:string){
    return this.http.get<Products>(`http://localhost:3000/products/${id}`);
  }
  updateProducts(product : Products){
    return this.http.put<Products>(`http://localhost:3000/products/${product.id}`,product)
  }
  deleteOrders(id:number){
    return this.http.delete(`http://localhost:3000/orders/${id}`);
  }
  ordersList(){
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }
  getOrder(id:string){
    return this.http.get<Order>(`http://localhost:3000/orders/${id}`);
  }
  updateOrders(order : Order){
    return this.http.put<Order>(`http://localhost:3000/orders/${order.id}`,order)
  }

}
