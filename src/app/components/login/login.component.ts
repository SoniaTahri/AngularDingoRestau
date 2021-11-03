import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
user:any={};  //declaration d'objet
findeduser:any;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      pwd : ['']
    });
  }

login(){
  alert('btn clicked');
  console.log('her my object ', this.user);
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  let connecteduser = JSON.parse(localStorage.getItem('connecteduser')||'[]');
  for (let i = 0; i < users.length; i++) {
    if ((users[i].email == this.user.email) && (users[i].pwd == this.user.pwd)) {
      connecteduser=users[i];
      this.findeduser = users[i];  // compare les roles des users
    }
    
  }
  localStorage.setItem('connecteduser',JSON.stringify(connecteduser));
  console.log('findeduser',this.findeduser)
  
  if (this.findeduser) {
    switch(this.findeduser.role) {
    case "user":
      this.router.navigate(['']) 
      break;
    case "chef":
      this.router.navigate(['addChef'])
      break;
    case "admin":
      this.router.navigate(['addAdmin'])
      break;  
      
      default:
        break;
    }
}

}
}