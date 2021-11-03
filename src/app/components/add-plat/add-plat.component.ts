import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  platform:FormGroup;
  plat:any={};
  id : any;
  title : any;

    constructor(private formBuilder:FormBuilder, private activatedRoute : ActivatedRoute, private platService :PlatService) { }
  
    ngOnInit() {
      this.platform = this.formBuilder.group({
        platName:[''],
        desc:[''],
        price:['']
       
      });

      this.id = this.activatedRoute.snapshot.paramMap.get('id');  //capturer les donnees 
      this.platService.getPlatById(this.id).subscribe(
        (data)=>{
          console.log('mon objet', data);
          this.plat = data.findedPlat;
        }
      );
      
    }
  
  addplat(){
    
    if(this.id){
      //edit
      this.platService.editPlat(this.plat).subscribe(
        (data)=>{
          console.log('edit with success',data.updatedPlat);
        }
      )

    }else{
      //add
      console.log(this.plat)
      this.platService.addPlat(this.plat).subscribe(
        (data)=>{
          console.log(data.message);
        }
      )
    }
 

  }

}
