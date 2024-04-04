import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../models/object.model';

@Component({
  selector: 'app-seller-update-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent implements OnInit {
  
  productData : undefined | Products;
  productMessage : undefined | string;

  constructor(private route : ActivatedRoute, private productService: ProductService, private router: Router){

  }
  ngOnInit(): void {
    
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.productService.getProduct(productId).subscribe((data)=>{
      console.warn(data)
      this.productData = data;
    })

  }

  submit(data:any){
    if(this.productData){
      data.id = this.productData.id;
    }
    this.productService.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Product updated"
        alert("Product Updated...!")
        this.router.navigate(['seller-home'])
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined;
    },3000)
    console.warn(data)
  }

}
