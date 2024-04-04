import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent implements OnInit {

  adminName: string = "";

  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }

  logOut() {
    localStorage.removeItem('admin')
    this.router.navigate(['admin-login'])
  }
}
