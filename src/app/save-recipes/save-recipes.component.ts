import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-save-recipes',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './save-recipes.component.html',
  styleUrl: './save-recipes.component.css'
})
export class SaveRecipesComponent {

}
