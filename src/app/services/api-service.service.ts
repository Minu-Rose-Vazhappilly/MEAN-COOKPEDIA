import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  http = inject(HttpClient)
  serverUrl = "http://localhost:3000"
  
  //getAllrecipes
  getAllRecipesAPI(){
     return this.http.get(`${this.serverUrl}/recipes/all`)

  }

}
