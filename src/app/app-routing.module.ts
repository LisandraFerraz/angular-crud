import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'

// criando as rotas de navegação que serao acessadas por meio dos hiperlinks no html
const routes: Routes = [{
  // rota da home
  path: "",
  component: HomeComponent
}, {
  // rota dos produtos
  path: "products",
  component: ProductCrudComponent
}, {
  path: "products/create",
  component: ProductCreateComponent  
}, {
  // :id está sendo informado como um parametro
  path: "products/update/:id",
  component: ProductUpdateComponent
}, {
  path: "products/delete/:id",
  component: ProductDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
