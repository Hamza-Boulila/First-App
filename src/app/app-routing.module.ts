import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {ProductsComponent} from "./products/products.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"newproduct", component: NewProductComponent},
  {path:"products", component: ProductsComponent},
  {path:"editproduct/:id", component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
