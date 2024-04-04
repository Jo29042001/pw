import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { Cart, Products, Signup } from '../models/object.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {

  userForm!: FormGroup;
  loginError: String=''
  
  constructor(private userService : UserService,private router: Router,private formBuilder: FormBuilder, private productService : ProductService){

  }

  ngOnInit(): void {
    this.userService.userReload();
    this.userForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
  
    })
    }

    login(data:Signup):void{
      this.userService.userLogin(data);
      this.userService.isLoginError.subscribe((isError: any)=>{
        if(isError){
          this.loginError="Email or password is not correct";
        }
      })
  
    }

    openSignup(){
      this.router.navigate(['user-signup']);
    }

  localCartToRemoteCart(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if(data){
      let cartDataList:Products[] = JSON.parse(data);
      cartDataList.forEach((products:Products,index)=>{
        let cartData:Cart={
          ...products,
          productId: products.id,
          userId,
        }
        delete cartData.id
        setTimeout(()=>{
          this.productService.addToCart(cartData).subscribe((result)=>{
            if(result){
              console.warn("data")
            }
          })
        },500);
        if(cartDataList.length === index+1){
          localStorage.removeItem('localCart')
        }
      })
    }
    setTimeout(()=>{
      this.productService.getCartList(userId);
    },2000);  
  }
}
