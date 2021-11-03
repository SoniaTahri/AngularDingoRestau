import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-display-plat',
  templateUrl: './display-plat.component.html',
  styleUrls: ['./display-plat.component.css']
})
export class DisplayPlatComponent implements OnInit {
  myPlats:any;
  id :any;
  constructor(private platService : PlatService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.platService.getPlatById(this.id).subscribe(
      (data)=>{
        console.log('get plat by id',data.findedPlat);
        this.myPlats = data.findedPlat;
      });
  }

}
