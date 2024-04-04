import { EventEmitter, Injectable } from '@angular/core';
import { Login, Signup } from '../models/object.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  invalidUser = new EventEmitter<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false);
  
  constructor(private http : HttpClient, private router : Router) { }

  userSignUp(user:Signup){
    this.http.post("http://localhost:3000/users",user, {observe:'response'}).subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        alert("SignUp Successful...!")
          this.router.navigate(['/user-login'])
      }
    })
  }
  userLogin(data: Login){
    this.http.get<Signup[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`, 
    {observe:'response'}
    ).subscribe((result:any)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        alert("Login Successful...!")
          this.router.navigate(['/']);
          this.invalidUser.emit(false)
      }else{
        alert("Login Failed...!")
        this.invalidUser.emit(true)
      }
    })
  }
  userReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/user-login']);
    }
  }
}
