import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../models/object.model';
import { RouterLink } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,NgbCarousel,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 
  
  trendyProducts : undefined | Products[];
  searchResult: Products[] =[];
  searchQuery: String = '';

  constructor(private productService : ProductService){

  }

  ngOnInit(): void {
    
    this.productService.trendyProducts().subscribe((data)=>{
      this.trendyProducts= data;
    })
  }
  
}


