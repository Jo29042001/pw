import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Signup } from '../../models/object.model';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-shippers',
  standalone: true,
  imports: [AdminHeaderComponent,RouterLink,CommonModule,FormsModule, FontAwesomeModule],
  templateUrl: './shippers.component.html',
  styleUrl: './shippers.component.css'
})
export class ShippersComponent implements OnInit {

  shippers: Signup[] = [];
  username: string='';
  icon=faTrash;
  iconEdit=faEdit;
  shipperList:undefined | Signup[];
  shipperMessage:undefined|String;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getShippers().subscribe((response)=>{
      this.shippers = response;
    })
    this.list();
  }
  Search(){
    if(this.username == ""){
      this.ngOnInit();
    }else{
      this.shippers = this.shippers.filter(response=>{
        return response.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
  deleteShipper(id: number){
    this.adminService.deleteShippers(id).subscribe((result)=>{
      if(result){
        this.shipperMessage="Shipper Deleted";
        alert("Shipper Deleted...!")
        this.list();
      }
    });
    setTimeout(()=>{
      this.shipperMessage=undefined
    },2000)
  }
  list(){
    this.adminService.sellersList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.shipperList=result;
      }
    });
  }
}
