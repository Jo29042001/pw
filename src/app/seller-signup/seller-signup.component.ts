import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Signup } from '../models/object.model';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './seller-signup.component.html',
  styleUrl: './seller-signup.component.css'
})
export class SellerSignupComponent implements OnInit {

  sellerForm!: FormGroup;
  loginError: string = '';

  constructor(private sellerService: SellerService, private formBuilder: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.sellerService.reloadSeller();

    this.sellerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      houseno: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      mobileNumber: ['', Validators.required],
    })
  }
  signUp(data: Signup): void {
    console.warn(data);
    this.sellerService.userSignup(data);
  }

  openLogin() {
    this.router.navigate(['/seller-login'])
  }
}
