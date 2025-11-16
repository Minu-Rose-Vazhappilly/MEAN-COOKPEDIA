import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegisterComponent } from './register/register.component';
import { SaveRecipesComponent } from './save-recipes/save-recipes.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    //baseurl
    {
        path:"",component:HomeComponent,title:"cookpedia-Home"
    },{
       path:"about",component:AboutComponent,title:"cookpedia-about" 
    },{
       path:"contact",component:ContactComponent,title:"cookpedia-contact" 
    },{
       path:"login",component:LoginComponent,title:"cookpedia-login" 
    },{
       path:"profile",component:ProfileComponent,title:"cookpedia-profile" 
    },{
       path:"recipes",component:RecipesComponent,title:"cookpedia-recipes" 
    },{
       path:"register",component:RegisterComponent,title:"cookpedia-register" 
    },{
       path:"recipe/save",component:SaveRecipesComponent,title:"cookpedia-Recipe Collection" 
    },{
       path:"recipes/:id/view",component:ViewRecipeComponent,title:"cookpedia-View Recipe" 
    },{
       path:"**",component:PnfComponent,title:"Page Not Found" 
    }
];
