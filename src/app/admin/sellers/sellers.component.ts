import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Signup } from '../../models/object.model';
import { FormsModule } from '@angular/forms';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminHeaderComponent, FontAwesomeModule, RouterLink],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent implements OnInit {

  sellers: Signup[] = [];
  username: string='';
  icon=faTrash;
  iconEdit=faEdit;
  sellerList:undefined | Signup[];
  sellerMessage:undefined|String;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getSellers().subscribe((response)=>{
      this.sellers = response;
    })
    this.list();
  }
  Search(){
    if(this.username == ""){
      this.ngOnInit();
    }else{
      this.sellers = this.sellers.filter(response=>{
        return response.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
  deleteSeller(id: number){
    this.adminService.deleteSellers(id).subscribe((result)=>{
      if(result){
        this.sellerMessage="Seller Deleted";
        alert("Seller Deleted...!")
        this.list();
      }
    });
    setTimeout(()=>{
      this.sellerMessage=undefined
    },2000)
  }
  list(){
    this.adminService.sellersList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.sellerList=result;
      }
    });
  }
}
