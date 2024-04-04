import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Signup } from '../../models/object.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-shippers-update',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './shippers-update.component.html',
  styleUrl: './shippers-update.component.css'
})
export class ShippersUpdateComponent implements OnInit {
  
  shipperData : undefined | Signup;
  shipperMessage : undefined | string;

  constructor(private route : ActivatedRoute, private router: Router, private adminService : AdminService){

  }
  ngOnInit(): void {
    
    let shipperId = this.route.snapshot.paramMap.get('id');
    console.warn(shipperId);
    shipperId && this.adminService.getSeller(shipperId).subscribe((data)=>{
      console.warn(data)
      this.shipperData = data;
    })

  }

  submit(data:any){
    if(this.shipperData){
      data.id = this.shipperData.id;
    }
    this.adminService.updateSellers(data).subscribe((result)=>{
      if(result){
        this.shipperMessage="Shipper updated"
        alert("Shipper Updated...!")
        this.router.navigate(['/admin/shippers'], {
          skipLocationChange: true,
        });
      }
    })
    setTimeout(()=>{
      this.shipperMessage=undefined;
    },3000)
    console.warn(data)
  }

}

