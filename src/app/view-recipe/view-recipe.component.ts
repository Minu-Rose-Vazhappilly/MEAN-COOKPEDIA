
import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import autoTable from 'jspdf-autotable'
import jsPDF from 'jspdf';

@Component({
  selector: 'app-view-recipe',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.css'
})
export class ViewRecipeComponent {

  recipeId:any = ""
  recipe:any = {}
  api=inject(ApiServiceService)
  route = inject(ActivatedRoute)
  relatedRecipe:any = []
  
  
  ngOnInit(){
    //get dynamic id from url
    this.route.params.subscribe((res:any)=>{
      this.recipeId = res.id 
      console.log(this.recipeId);

      this.getRecipeDetails(this.recipeId)
      
    })

  }

  getRecipeDetails(id:any){

  this.api.viewRecipeAPI(id).subscribe({
    next:(res:any)=>{
      this.recipe = res
      console.log(this.recipe);

      this.getRelatedRecipe(res.cuisine)
      
    },
    error:(reason:any)=>{
      alert(reason.error)
    }
  })

  }
  
getRelatedRecipe(cuisine:any){
  this.api.relatedRecipeAPI(cuisine).subscribe((res:any)=>{
    if(res.length>1){
      this.relatedRecipe = res.filter((item:any)=>item.name!=this.recipe.name)
      console.log(this.relatedRecipe);
      
    }else{
      this.relatedRecipe = []
    }
  })
}

addToDownload(){
  this.api.addToDownloadAPI(this.recipe).subscribe((res:any)=>{
    this.downloadRecipe()
  })
}

downloadRecipe(){
  let pdf = new jsPDF;
  let headRow = ['Name','Cuisisne','Servings','Ingredients','Instructions']
  let bodyData = [this.recipe.name,this.recipe.cuisine,this.recipe.servings,this.recipe.ingredients,this.recipe.instructions]
  autoTable(pdf,{
    head:[headRow],
    body:[bodyData]
  })
  pdf.save('recipe.pdf')
}

}
