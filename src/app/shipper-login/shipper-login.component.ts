import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Signup } from '../models/object.model';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-shipper-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './shipper-login.component.html',
  styleUrl: './shipper-login.component.css'
})
export class ShipperLoginComponent implements OnInit{

  shipperForm!: FormGroup;
  loginError: String=''

  constructor(private signupService : SignupService, private router: Router,private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
   this.signupService.reloadShipper();

   this.shipperForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],

  })
  }

  login(data:Signup):void{
    this.signupService.shipperLogin(data);
    this.signupService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.loginError="Email or password is not correct";
      }
    })

  }

  openSignup(){
    this.router.navigate(['signup']);
  }

}
