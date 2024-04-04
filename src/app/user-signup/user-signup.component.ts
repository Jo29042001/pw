import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Signup } from '../models/object.model';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent {

  userForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.userService.userReload();

    this.userForm = this.formBuilder.group({
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
    this.userService.userSignUp(data);
  }


  openLogin() {
    this.router.navigate(['/user-login'])
  }
}
