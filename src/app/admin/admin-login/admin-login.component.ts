import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
    
    loginObj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  OnLogin() {
    if (this.loginObj.username === 'admin' && this.loginObj.password === '334455') {
      alert('Login Successful...!');
      this.router.navigate(['/admin/users'], {
        skipLocationChange: true,
      });
    } else {
      alert('Wrong credentials');
    }
  }
}
