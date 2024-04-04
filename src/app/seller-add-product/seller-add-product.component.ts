import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Products } from '../models/object.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit{
  
  addProductMessage: String|undefined;

  constructor(private productService : ProductService, private router : Router){

  }
  ngOnInit(): void {
  
  }
  submit(data:Products){
    this.productService.addProduct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.addProductMessage = "Product is added successfully"
        alert("Product Added...!")
        this.router.navigate(['/seller-home'])
      }
    });
    setTimeout(()=>{
      this.addProductMessage= undefined
    },3000);
  }

}
