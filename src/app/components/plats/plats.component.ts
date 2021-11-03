import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {


  platsP:any=[];
  plats:any;

  constructor() { }

  ngOnInit() {

    this.plats = JSON.parse(localStorage.getItem('plats'));
    for (let i = 0; i < this.plats.length; i++) {
        this.platsP.push(this.plats[i])
      
    }
  }

}
