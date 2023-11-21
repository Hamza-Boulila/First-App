import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProductComponent,
    HomeComponent,
    NewProductComponent,
    ProductsComponent,
    DashboardComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DashboardComponent,
    EditProductComponent
  ]
})
export class AppModule {}
