import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {
  
  plats:any;
  chefs:any[];
  connectedUser:any;
  plat:any=[];
  constructor(private platService : PlatService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router) { }


  ngOnInit() {
     
    this.platService.getAllPlats().subscribe(
      (data)=>{
        console.log('here my plat',data.plats);
        this.plat = data.plats;
      });
  
  }

  deletePlat(id : any){
  this.platService.deletePlat(id).subscribe(
    (data)=>{
      console.log('delete plat',data.message);
      this.platService.getAllPlats().subscribe(
        (data)=>{
          console.log('here my plat',data.plats);
          this.plat = data.plats;
        });
    });
  }

  displayPlat(id : any){
   this.router.navigate([`displayplat/${id}`]);
  }

  editPlat(id : any){
    this.router.navigate([`editPlat/${id}`]);
  }
}

 
