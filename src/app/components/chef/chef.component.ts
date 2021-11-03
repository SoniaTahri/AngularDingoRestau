import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {


  @Input() childChef;
  //EventEmitter c'est un module qui permet de déclancher des evenements
  @Output() newChefs : EventEmitter <any>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(id: any){
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let pos;
    for (let i = 0; i < users.length; i++) {
       if (users[i].id == id) {
         pos = i;
         
       }
    }
    //tableau d'objets users on va supprimer a partir de la position un seul element
    users.splice(pos, 1);
    localStorage.setItem('users', JSON.stringify(users));
     //declanchement de l'evnmnt d'envoi //emet tab3eth donnees jdod lel parent par exemple kn fsa5t chef child yemchi yafeskhou ml chefs parent
    this.newChefs.emit(users)
  }

}
