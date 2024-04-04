import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../models/object.model';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterLink],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {

  productList:undefined | Products[];
  productMessage:undefined|String;
  icon=faTrash;
  iconEdit=faEdit;
  
  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
   this.list();
  }
  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product is deleted";
        alert("Product Deleted...!")
        this.list();
      }
    });
    setTimeout(()=>{
      this.productMessage=undefined
    },2000)
  }

  list(){
    this.productService.productList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productList=result;
      }
    });
  }
}
