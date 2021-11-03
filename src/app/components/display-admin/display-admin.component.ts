import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-display-admin',
  templateUrl: './display-admin.component.html',
  styleUrls: ['./display-admin.component.css']
})
export class DisplayAdminComponent implements OnInit {

  id : any;
  admins:any;
  admin:any;
  constructor(private activatedRoute : ActivatedRoute,
    private adminService: AdminService) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');

    this.adminService.getAdminsById(this.id).subscribe(
      (data)=>{
        console.log('get plat by id',data.findedUser);
        this.admin = data.findedUser
      });
  }

}
