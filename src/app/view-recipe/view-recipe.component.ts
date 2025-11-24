import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  imports: [HeaderComponent, FooterComponent],
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

}
