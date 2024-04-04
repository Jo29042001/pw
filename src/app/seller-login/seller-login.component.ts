import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Signup } from '../models/object.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.css'
})
export class SellerLoginComponent implements OnInit{

  sellerForm!: FormGroup;
  loginError: String=''

  constructor(private sellerService : SellerService, private router: Router,private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
   this.sellerService.reloadSeller();

   this.sellerForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],

  })
  }

  login(data:Signup):void{
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.loginError="Email or password is not correct";
      }
    })

  }

  openSignup(){
    this.router.navigate(['signup'])
  }

}
