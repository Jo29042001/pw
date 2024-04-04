import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { Order } from '../models/object.model';

@Component({
  selector: 'app-shipper-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './shipper-home.component.html',
  styleUrl: './shipper-home.component.css'
})
export class ShipperHomeComponent implements OnInit {

  orders: Order[] = [];
  userId:any;

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
      this.signupService.getOrders().subscribe((response) => {
          this.orders = response;
      });
  }
}
