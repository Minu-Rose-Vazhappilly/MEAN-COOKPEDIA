import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  imports: [HeaderComponent, FooterComponent,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  //property
  p:number = 1
  allRecipes:any = []
  dummyAllRecipe:any = []
  router=inject(Router)
  api = inject(ApiServiceService)
  cuisineArray:any = []
  mealTypeArray:any = []
  searchKey:string=""
  //constructor
  //lifecyclemethod
  ngOnInit(){
    this.getAllRecipes()
  }
  //userdefined functions

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.allRecipes = res
      this.dummyAllRecipe = res
      console.log(this.allRecipes);
      this.allRecipes.forEach((item:any) => {
        !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
      });
      console.log(this.cuisineArray);
      const dummyMealArray = this.allRecipes.map((item: any) => item.mealType).flat(Infinity)
      dummyMealArray.forEach((item:any) => {
        !this.mealTypeArray.includes(item) && this.mealTypeArray.push(item)
      });
      console.log(this.mealTypeArray);
      
    })
  }

  filterRecipe(key:string,value:string){
   //need to write 
    this.allRecipes = this.dummyAllRecipe.filter((item:any)=>item[key] == value)
  }

  //navigate to view
  navigateView(recipeId:string){
    if(sessionStorage.getItem('token')){
      this.router.navigateByUrl(`recipes/${recipeId}/view`)
    }else{
      alert("plaese login to get full access to our recipe collection")
    }
  }

}
