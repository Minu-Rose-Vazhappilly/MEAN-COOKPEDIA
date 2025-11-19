import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from "@angular/router";
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
      this.allRecipes = res.slice(0,6)
      console.log(this.allRecipes);
      
    })
  }

}
