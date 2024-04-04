import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, Order, Signup } from '../models/object.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isShipperLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  order_url:string = 'http://localhost:3000/orders';

  constructor(private http : HttpClient, private router : Router) { }

  //shipper
  shipperSignup(data:Signup){
   this.http.post('http://localhost:3000/shippers',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){  
        localStorage.setItem('shipper',JSON.stringify(result.body))
        alert("SignUp Successful...!")
        this.router.navigate(['/shipper-login'])
      }
    })
  }
  
  reloadShipper(){
    if(localStorage.getItem('shipper')){
      this.isShipperLoggedIn.next(true)
      this.router.navigate(['/shipper-login'])
    }
  }

  shipperLogin(data:Login){
    this.http.get(`http://localhost:3000/shippers?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('shipper',JSON.stringify(result.body))
       alert("Login Successful...!")
       this.router.navigate(['/shipper-home'])
     }else{
       console.warn("login failed");
       alert("Login Failed...!")
       this.isLoginError.emit(true)
     }
    })
   } 

   //seller
  sellerSignup(data:Signup){
    this.http.post('http://localhost:3000/seller',
     data,
     {observe:'response'}).subscribe((result)=>{
       console.warn(result)
       if(result){  
         localStorage.setItem('seller',JSON.stringify(result.body))
         alert("SignUp Successful...!")
         this.router.navigate(['/seller-login'])
       }
     })
   }
   
   reloadSeller(){
     if(localStorage.getItem('seller')){
       this.isShipperLoggedIn.next(true)
       this.router.navigate(['/seller-login'])
     }
   }
 
   sellerLogin(data:Login){
     this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
     {observe:'response'}).subscribe((result:any)=>{
      console.warn(result)
      if(result && result.body && result.body.length===1){
        this.isLoginError.emit(false)
        localStorage.setItem('seller',JSON.stringify(result.body))
        alert("Login Successful...!")
        this.router.navigate(['/seller-home'])
      }else{
        console.warn("login failed");
        alert("Login Failed...!")
        this.isLoginError.emit(true)
      }
     })
    } 

   getOrders(){
    return this.http.get<Order[]>(this.order_url);
  }
}
