import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tracking } from '../models/object.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent implements OnInit {
  // orderTrackings: Tracking[] = [];
  // orderId: number = 5;

  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    // this.loadOrderTrackings(this.orderId);
  }
  // loadOrderTrackings(orderId: number): void {
  //   this.orderService.getOrderById(orderId).subscribe(
  //     (order:any) => {
  //       if (order) {
  //         // Assuming order.trackings is an array containing tracking information
  //         this.orderTrackings = order.trackings;
  //       } else {
  //         console.error('Order not found.');
  //       }
  //     },
  //     error => {
  //       console.error('Error loading order:', error);
  //     }
  //   );
  // }
}