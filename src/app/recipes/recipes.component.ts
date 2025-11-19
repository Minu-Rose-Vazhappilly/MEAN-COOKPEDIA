import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-recipes',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  //property
  allRecipes:any = []

  api = inject(ApiServiceService)
  //constructor
  //lifecyclemethod
  ngOnInit(){
    this.getAllRecipes()
  }
  //userdefined functions

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.allRecipes = res
      console.log(this.allRecipes);
      
    })
  }

}
