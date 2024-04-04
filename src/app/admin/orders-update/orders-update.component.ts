import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/object.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-update',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './orders-update.component.html',
  styleUrl: './orders-update.component.css'
})
export class OrdersUpdateComponent implements OnInit {
  
  orderData : undefined | Order;
  orderMessage : undefined | string;

  constructor(private route : ActivatedRoute, private router: Router, private adminService : AdminService){

  }
  ngOnInit(): void {
    
    let orderId = this.route.snapshot.paramMap.get('id');
    console.warn(orderId);
    orderId && this.adminService.getOrder(orderId).subscribe((data)=>{
      console.warn(data);
      this.orderData = data;
    })

  }

  submit(data:any){
    if(this.orderData){
      data.id = this.orderData.id;
    }
    this.adminService.updateOrders(data).subscribe((result)=>{
      if(result){
        this.orderMessage="Order updated"
        alert("Order Updated...!")
        this.router.navigate(['/admin/orders'], {
          skipLocationChange: true,
        });
      }
    })
    setTimeout(()=>{
      this.orderMessage=undefined;
    },3000)
    console.warn(data)
  }

}


