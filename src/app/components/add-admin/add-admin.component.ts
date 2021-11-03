import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  //declarations des variables 
  title:string;
  addAdminForm : FormGroup; 
  id:any;
  admin:any;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private adminService : AdminService) { }

  ngOnInit() {
    
    this.addAdminForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      pwd:[''],
      cpwd:[''],
      phone:[''],
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');  //capturer les donnees 

    this.adminService.getAdminsById(this.id).subscribe(
      (data)=>{
        console.log('mon objet', data.findedUser);
        this.admin = data.findedUser;
        console.log('my admin is ',this.admin)
      });

    if (this.id) {
      this.title='Edit';
    }
    else{
      this.title='Add';
    }
    
  }


  addAdmin(a:any){
    // alert('btn clicked from add Admin component');
    // // console.log(this.addAdminForm.value);

    // let users = JSON.parse(localStorage.getItem('users') || '[]');
    // let idUser = JSON.parse(localStorage.getItem('idUser') || '1');
    // a.id = idUser;
    // a.role="admin";

    // users.push(a);
    // localStorage.setItem('idUser', idUser + 1);
    // localStorage.setItem('users', JSON.stringify(users));

    if(this.id){
      //edit

      this.adminService.editAdmin(this.admin).subscribe(
        (data)=>{
          console.log('edit with success',data.message);
        }
      )

    }else{
      //add
      a.role="admin";
      console.log(a)
      this.adminService.addAdmin(a).subscribe(
        (data)=>{
          console.log(data.message);
        });
    }
  }

}
