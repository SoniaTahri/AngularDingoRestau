import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl : string = 'http://localhost:3000/users';
  //SERVER_URl: string = 'http://localhost:3000/users';

  constructor(private httpClient : HttpClient) { }

  getAllUsers(){
    return this.httpClient.get<{findedUser:any}>(this.userUrl);
  }
  getUsersById(id : any){
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }
  
  //addUser
  signup(user : any){
    return this.httpClient.post<{message:string}>(this.userUrl, user);
  }

  editUser(user : any){
    return this.httpClient.put(`${this.userUrl}/${user.id}`, user);
  }

  deleteUser(id : any){
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }
}
