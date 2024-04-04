import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Products } from '../../models/object.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-products-update',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './products-update.component.html',
  styleUrl: './products-update.component.css'
})
export class ProductsUpdateComponent implements OnInit {
  
  productData : undefined | Products;
  productMessage : undefined | string;

  constructor(private route : ActivatedRoute, private router: Router, private adminService : AdminService){

  }
  ngOnInit(): void {
    
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.adminService.getProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.productData = data;
    })

  }

  submit(data:any){
    if(this.productData){
      data.id = this.productData.id;
    }
    this.adminService.updateProducts(data).subscribe((result)=>{
      if(result){
        this.productMessage="Product updated"
        alert("Product Updated...!")
        this.router.navigate(['/admin/products'], {
          skipLocationChange: true,
        });
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined;
    },3000)
    console.warn(data)
  }

}

