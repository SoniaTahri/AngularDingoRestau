import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-chef',
  templateUrl: './display-chef.component.html',
  styleUrls: ['./display-chef.component.css']
})
export class DisplayChefComponent implements OnInit {

  id : any;
  chefs:any;
  chef:any;

  constructor( private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id",this.id);
    this.chefs = JSON.parse(localStorage.getItem('users')||'[]');
    for (let i = 0; i < this.chefs.length; i++) {
      if (this.chefs[i].id == this.id) {
        this.chef = this.chefs[i]
      }
    }

    console.log('my chef',this.chef)
  }

}
