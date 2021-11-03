import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platUrl : string = 'http://localhost:3000/plats';
  constructor(private httpClient : HttpClient) {}
     getAllPlats(){
       return this.httpClient.get<{plats:any}>(this.platUrl);
     }

     getPlatById(id : any){
       return this.httpClient.get<{findedPlat:any}>(`${this.platUrl}/${id}`);
     }

     addPlat(plat : any){
       return this.httpClient.post<{message:string}>(this.platUrl, plat);
     }

     editPlat(plat : any){
       return this.httpClient.put<{updatedPlat:any}>(`${this.platUrl}/${plat._id}`, plat)
     }

     deletePlat(id : any){
       return this.httpClient.delete<{message:string}>(`${this.platUrl}/${id}`);
     }
   
}
