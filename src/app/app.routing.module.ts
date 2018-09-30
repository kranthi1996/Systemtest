import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import { ProductsComponent } from './products/products.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'list',component:ProductsComponent},
    {path:'feedback',component:FeedbackComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
