import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  id : any;
  clients:any;
  user:any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id",this.id);
    this.clients = JSON.parse(localStorage.getItem('users')||'[]');
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id == this.id) {
        this.user = this.clients[i]
      }
    }

    console.log('my user',this.user)
  }

}
