import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
   
  chefs:any=[];
  users:any;
  constructor() { }

  ngOnInit() {
    // this.chefs = [
    //   {id:1, name:'yassine', experience:'10', specialite:'salé'},
    //   {id:1, name:'sonia', experience:'5', specialite:'delice'},
    //   {id:1, name:'amine', experience:'3', specialite:'japonaise'},
    // ]

    this.users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].role == 'chef') {
        this.chefs.push(this.users[i])
      }
      
    }
  }
  update(e : any){  //e howa user eli bech ysir 3lih changement
     this.users = e;
  }

}
