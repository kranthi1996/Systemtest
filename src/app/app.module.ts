import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductsService} from './products.service';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //ToastModule.forRoot()
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
