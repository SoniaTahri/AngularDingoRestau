import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchPlatform:FormGroup;
  plat:any={};
  id : any;

    constructor(private formBuilder:FormBuilder, private activatedRoute : ActivatedRoute,private searchService : SearchService) { }
  
    ngOnInit() {
      this.searchPlatform = this.formBuilder.group({
        platName:[''],
       
      });

    
    }
  
  searchplat(plat:any){
    this.searchService.getPlatsById(this.id).subscribe(
      (data)=>{
        console.log('mon plat', data);
        plat = data
      }
    );

  }

}

