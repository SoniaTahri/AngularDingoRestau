import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  chefUrl : string = 'http://localhost:3000/chefs';
  constructor(private httpClient : HttpClient) {}
     getAllChefs(){
       return this.httpClient.get(this.chefUrl);
     }

     getChefById(id : any){
       return this.httpClient.get(`${this.chefUrl}/${id}`);
     }

     addChef(chef : any){
       return this.httpClient.post<{message:string}>(this.chefUrl, chef);
     }

     editChef(chef : any){
       return this.httpClient.put(`${this.chefUrl}/${chef.id}`, chef)
     }

     deleteChef(id : any){
       return this.httpClient.delete(`${this.chefUrl}/${id}`);
     }
   
}
