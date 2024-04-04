import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Signup } from '../../models/object.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-sellers-update',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './sellers-update.component.html',
  styleUrl: './sellers-update.component.css'
})
export class SellersUpdateComponent implements OnInit {
  
  sellerData : undefined | Signup;
  sellerMessage : undefined | string;

  constructor(private route : ActivatedRoute, private router: Router, private adminService : AdminService){

  }
  ngOnInit(): void {
    
    let sellerId = this.route.snapshot.paramMap.get('id');
    console.warn(sellerId);
    sellerId && this.adminService.getSeller(sellerId).subscribe((data)=>{
      console.warn(data)
      this.sellerData = data;
    })

  }

  submit(data:any){
    if(this.sellerData){
      data.id = this.sellerData.id;
    }
    this.adminService.updateSellers(data).subscribe((result)=>{
      if(result){
        this.sellerMessage="Seller updated"
        alert("Seller Updated...!")
        this.router.navigate(['/admin/sellers'], {
          skipLocationChange: true,
        });
      }
    })
    setTimeout(()=>{
      this.sellerMessage=undefined;
    },3000)
    console.warn(data)
  }

}

