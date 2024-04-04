import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/object.model';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, AdminHeaderComponent,FormsModule, FontAwesomeModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  productName : any;
  icon=faTrash;
  iconEdit=faEdit;
  productList:undefined | Products[];
  productMessage:undefined|String;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getProducts().subscribe((response)=>{
      this.products = response;
    })
    this.list();
  }
  Search(){
    if(this.productName == ""){
      this.ngOnInit();
    }else{
      this.products = this.products.filter(response=>{
        return response.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
      })
    }
  }
  deleteProduct(id: number){
    this.adminService.deleteProducts(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product Deleted";
        alert("Product Deleted...!")
        this.list();
      }
    });
    setTimeout(()=>{
      this.productMessage=undefined
    },2000)
  }
  list(){
    this.adminService.productsList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productList=result;
      }
    });
  }
}
