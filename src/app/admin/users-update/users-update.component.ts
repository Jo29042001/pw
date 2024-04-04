import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Signup } from '../../models/object.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-users-update',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './users-update.component.html',
  styleUrl: './users-update.component.css'
})
export class UsersUpdateComponent implements OnInit {
  
  userData : undefined | Signup;
  userMessage : undefined | string;

  constructor(private route : ActivatedRoute, private router: Router, private adminService : AdminService){

  }
  ngOnInit(): void {
    
    let userId = this.route.snapshot.paramMap.get('id');
    console.warn(userId);
    userId && this.adminService.getUser(userId).subscribe((data)=>{
      console.warn(data)
      this.userData = data;
    })

  }

  submit(data:any){
    if(this.userData){
      data.id = this.userData.id;
    }
    this.adminService.updateUsers(data).subscribe((result)=>{
      if(result){
        this.userMessage="User updated"
        alert("User Updated...!")
        this.router.navigate(['/admin/users'], {
          skipLocationChange: true,
        });
      }
    })
    setTimeout(()=>{
      this.userMessage=undefined;
    },3000)
    console.warn(data)
  }

}

