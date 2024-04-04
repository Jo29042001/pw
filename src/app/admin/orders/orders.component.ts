import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/object.model';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { SearchComponent } from '../../search/search.component';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,FormsModule,AdminHeaderComponent, SearchComponent, FontAwesomeModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  userId:any;
  icon=faTrash;
  iconEdit=faEdit;
  orderList:undefined | Order[];
  orderMessage:undefined|String;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
      this.adminService.getOrders().subscribe((response) => {
          this.orders = response;
      })
      // this.list();
  }

  Search(){
      if(this.userId == ""){
        this.ngOnInit();
      }else{
        this.orders = this.orders.filter(response=>{
          return response.userId.toLocaleLowerCase().match(this.userId.toLocaleLowerCase());
        })
      }
    }
    deleteOrder(id: any){
      this.adminService.deleteOrders(id).subscribe((result)=>{
        if(result){
          this.orderMessage="Product Deleted";
          alert("Product Deleted...!")
          // this.list();
        }
      });
      setTimeout(()=>{
        this.orderMessage=undefined
      },2000)
    }
    // list(){
    //   this.adminService.ordersList().subscribe((result)=>{
    //     console.warn(result);
    //     if(result){
    //       this.orderList=result;
    //     }
    //   });
    // }
}