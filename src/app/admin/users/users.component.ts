import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";
import { Signup } from '../../models/object.model';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminHeaderComponent, FontAwesomeModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  
  users: Signup[] = [];
  username:any;
  icon=faTrash;
  iconEdit=faEdit;
  userList:undefined | Signup[];
  userMessage:undefined|String;
  
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getUsers().subscribe((response)=>{
      this.users = response;
    })
    this.list();
  }
  Search(){
    if(this.username == ""){
      this.ngOnInit();
    }else{
      this.users = this.users.filter(response=>{
        return response.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }

  deleteUsers(id: number){
    this.adminService.deleteUsers(id).subscribe((result)=>{
      if(result){
        this.userMessage="User Deleted";
        alert("User Deleted...!")
        this.list();
      }
    });
    setTimeout(()=>{
      this.userMessage=undefined
    },2000)
  }
  list(){
    this.adminService.usersList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.userList=result;
      }
    });
  }
  
}