import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

  addchefForm:FormGroup;
  id : any;
  title : any;
  chefs : any;
  chef : any ;

  constructor(private fb : FormBuilder , private activatedRoute : ActivatedRoute, private chefService: ChefService) { }

  ngOnInit() {
    this.addchefForm=this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(4)]],
    lastName:['',[Validators.required, Validators.minLength(4)]],
    email:['',[Validators.required, Validators.email]],
    experience:['',[Validators.required]],
    specialite:['',[Validators.required, Validators.minLength(6)]],
    phone:[''],
    pwd:[''],
    cpwd:[''],
  });

  this.id = this.activatedRoute.snapshot.paramMap.get('id');  //capturer les donnees 
  
  this.chefService.getChefById(this.id).subscribe(
    (data)=>{
      console.log('mon objet', data);
      this.chef = data
    }
  );

  if (this.id) {
    this.title='Edit';
  }
  else{
    this.title='Add';
  }
  

}
addChef(chef:any){

  if(this.id){
    //edit

    this.chefService.editChef(chef).subscribe(
      ()=>{
        console.log('edit with success')
      }
    )

  }else{
    //add
    chef.role = "chef";
    console.log(chef)
    this.chefService.addChef(chef).subscribe(
      (data)=>{
        console.log(data.message)
      }
    )
  }
 
}

}
