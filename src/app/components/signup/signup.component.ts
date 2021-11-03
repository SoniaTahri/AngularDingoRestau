import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch  } from "../confirmPwd";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:string;
  source:string;
  signupForm:FormGroup;
  constructor( private fb:FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.source='./assets/img/logo.png'
    this.title="Sign up";
    this.signupForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      phone:[''],
      pwd:[''],
      cpwd:[''],
    },
    {
      validator : MustMatch('pwd', 'cpwd')  // bech n3ml beli mdp w confirm mdp lazem yabdo kifkif

    }
    )
  }
  signup(c:any){
    // alert('btn clicked');
    // console.log('my object is',this.signupForm.value);
    // let users = JSON.parse(localStorage.getItem('users')||'[]');
    // let iduser = JSON.parse(localStorage.getItem('iduser'||'1'));
    // c.id = iduser;
    // c.role = 'user';
    // users.push(c);
    // localStorage.setItem('iduser',iduser+1);
    // localStorage.setItem('users',JSON.stringify(users));
    c.role = 'user';
    this.userService.signup(c).subscribe(
      (data)=>{
        console.log(data.message)
      }
    )
  }
}
