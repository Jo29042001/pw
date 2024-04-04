import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../models/object.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  searchResult:undefined|Products[];

  constructor(private route:ActivatedRoute, private productService: ProductService){

  }

   ngOnInit(): void {
    let productName = this. route.snapshot.paramMap.get('productName');
    console.warn(productName);
    productName && this.productService.searchProducts(productName).subscribe((result)=>{
      this.searchResult = result
    })
  }
}
