import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchUrl : string = 'http://localhost:3000';
  constructor(private httpClient : HttpClient) { }

   getAllPlats(){
      return this.httpClient.get(this.searchUrl);
    }

    getPlatsById(id : any){
      return this.httpClient.get(`${this.searchUrl}/${id}`);
    }
}
