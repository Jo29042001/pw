import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login, Signup } from '../models/object.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http : HttpClient, private router : Router) { }

  userSignup(data:Signup){
   this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){  
        localStorage.setItem('seller',JSON.stringify(result.body))
        alert("SignUp Successful...!")
        this.router.navigate(['seller-login'])
      }
    })
  }
  
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-login'])
    }
  }

  userLogin(data:Login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('seller',JSON.stringify(result.body))
       alert("Login Successful...!")
       this.router.navigate(['seller-home'])
     }else{
       console.warn("login failed");
       alert("Login Failed...!")
       this.isLoginError.emit(true)
     }
    })
   } 
 
}
