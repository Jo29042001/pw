import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { Order, Products } from '../models/object.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit {

  orderData : Order[]|undefined;
  productData : Products|undefined;

  constructor(private productService: ProductService, private orderService : OrderService){

  }
  ngOnInit(): void {
    this.getOrderList();
  }

  cancelOrder(orderId:number|undefined){
    orderId && this.productService.cancelOrder(orderId).subscribe((result)=>{
      if(result){
        this.getOrderList();
      }
    })
  }
  getOrderList(){
    this.productService.orderList().subscribe((result)=>{
      this.orderData=result;
    })
  }

}
