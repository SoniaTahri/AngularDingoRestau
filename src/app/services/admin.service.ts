import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
  adminUrl : string = 'http://localhost:3000/admins';
  //  adminUrl : string = 'http://localhost:8080/api/admins';
  constructor(private httpClient : HttpClient ) { }

    getAllAdmins(){
      return this.httpClient.get<{findedUser:any}>(this.adminUrl);
    }

    getAdminsById(id : any){
      return this.httpClient.get<{findedUser:any}>(`${this.adminUrl}/${id}`);
    }

    //<{message:string}> retour from FE
    addAdmin(admin : any){
      return this.httpClient.post<{message:string}>(this.adminUrl, admin);
    }

    editAdmin(admin : any){
      return this.httpClient.put<{message:string}>(`${this.adminUrl}/${admin._id}`, admin);
    }

    deleteAdmin(id : any){
      return this.httpClient.delete<{message:string}>(`${this.adminUrl}/${id}`);
    }
}
