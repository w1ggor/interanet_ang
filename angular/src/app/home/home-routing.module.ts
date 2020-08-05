import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [


  {path:"", component:MainComponent },
  {path:"about", component:AboutComponent },
  {path:"feature", component:FeatureComponent },
  {path:"contact", component:ContactComponent }
  



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
