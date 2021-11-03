import { getCurrencySymbol } from '@angular/common';
import { CompileMetadataResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ChefService } from 'src/app/services/chef.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  myusers:any=[];
  users:any;
  admins:any=[];
  adms:any
  admin:any=[];
  chefs:any=[];
  connectedUser:any;
  clients:any=[];
  
  myDate : Date;
  experience:any;
  constructor(private router : Router,private adminService: AdminService,
                                      private chefService : ChefService,
                                      private userService : UserService) { }

  ngOnInit() {
    this.adminService.getAllAdmins().subscribe(
      (data)=>{
        this.admins = data;
      });

      this.userService.getAllUsers().subscribe(
        (data)=>{
            this.myusers = data.findedUser;
            console.log(data.findedUser);
            console.log(this.myusers);
            for (let i = 0; i < this.myusers.length; i++) {
               if (this.myusers[i].role == 'admin') {
                 this.admins.push(this.myusers[i]);
                 console.log(this.admins);   
               }else if (this.myusers[i].role == 'chef'){
                  this.chefs.push(this.myusers[i]);
               } else if (this.myusers[i].role == 'user') {
                  this.clients.push(this.myusers[i]);
               }            
            }
        }
      )
  }



  // compare(experience){
  //   if (experience < 5) {
  //     return ['green', '20px'];
  //   }
  //   else{
  //     return ['red', '30px'];
  //   }
  // }



  

  // displayUser(id : any){
  //   this.router.navigate([`displayuser/${id}`]);
  // }

  // displayChef(id : any){
  //   this.router.navigate([`displaychef/${id}`]);
  // }

  // deleteUser(id : any){  
  //   let pos; //vailable local
  //   for (let i = 0; i < this.users.length; i++) {
  //     if (this.users[i].id == id){
  //       pos = i;
  //     }
  //     this.users.splice(pos, 1);
  //     localStorage.setItem('users', JSON.stringify(this.users))
  //   }
  // }

  // editChef(id : any){
  //   this.router.navigate([`editChef/${id}`]);
  //   console.log('My chef id is', id)

  // }
  
 

  deleteAdmin(id : any){
    this.adminService.deleteAdmin(id).subscribe(
      (data)=>{
        console.log('delete admin',data.message);
        this.adminService.getAllAdmins().subscribe(
          (data)=>{    
            this.myusers = data.findedUser;
            for (let i = 0; i < this.myusers.length; i++) {
               if (this.myusers[i].role == 'admin') {
                 this.admins.push(this.myusers[i]);
                 console.log(this.admins);   
               }            
            }
          });
      });
 
    }

    displayAdmin(id : any){
    this.router.navigate([`displayadmin/${id}`]);
  }

    editAdmin(id : any){
      this.router.navigate([`editAdmin/${id}`]);
    }
}
