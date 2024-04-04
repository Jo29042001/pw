import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupService } from '../services/signup.service';
import { Signup } from '../models/object.model';

@Component({
  selector: 'app-shipper-signup',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  loginError: string = '';

  constructor(private signupService: SignupService, private formBuilder: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.signupService.reloadShipper();

    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      houseno: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      role: ['', Validators.required]
    })
  }
  signUp(data: Signup): void {
    console.warn(data);
    // this.shipperService.userSignup(data);
    if (this.signupForm.valid) {
      const role = this.signupForm.get('role')?.value;
      // Redirect to appropriate route based on role
      if (role === 'SELLER') {
        this.signupService.sellerSignup(data);
        this.router.navigate(['/seller-login']); // Navigate to seller login route
      } else if (role === 'SHIPPER') {
        this.signupService.shipperSignup(data);
        this.router.navigate(['/shipper-login']); // Navigate to shipper login route
      } else if (role === 'USER') {
        this.router.navigate(['/user-login']); // Navigate to user login route
      }
    }
  }
  // onSubmit() {
  //   if (this.shipperForm.valid) {
  //     const role = this.shipperForm.get('role')?.value;
  //     // Redirect to appropriate route based on role
  //     if (role === 'SELLER') {
  //       this.router.navigate(['/seller-login']); // Navigate to seller login route
  //     } else if (role === 'SHIPPER') {
  //       this.router.navigate(['/shipper-login']); // Navigate to shipper login route
  //     } else if (role === 'USER') {
  //       this.router.navigate(['/user-login']); // Navigate to user login route
  //     }
  //   }
  // }

  openShipperLogin() {
    this.router.navigate(['shipper-login']);
  }
  openSellerLogin() {
    this.router.navigate(['seller-login']);
  }
}
