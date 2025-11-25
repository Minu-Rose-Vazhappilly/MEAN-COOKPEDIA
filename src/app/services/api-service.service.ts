import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  //register
  registerAPI(reqBody:any){
     return this.http.post(`${this.serverUrl}/register`,reqBody)

  }
  loginAPI(reqBody:any){
     return this.http.post(`${this.serverUrl}/login`,reqBody)
  }

  // appendToken : return token append req Header
  appendToken(){
    const token = sessionStorage.getItem("token")
     let headers = new HttpHeaders()
    if(token){
     
      headers = headers.append("Authorization",`Bearer ${token}`)



    }
    return {headers}

  }

  viewRecipeAPI(recipeId:string){
    return this.http.get(`${this.serverUrl}/recipes/${recipeId}/view`,this.appendToken())

  }

  relatedRecipeAPI(cuisine:string){
    return this.http.get(`${this.serverUrl}/related-recipes?cuisine=${cuisine}`,this.appendToken())
  }

  addToDownloadAPI(recipe:any){
    return this.http.put(`${this.serverUrl}/recipe/${recipe._id}/download`,recipe,this.appendToken())
  }


}
