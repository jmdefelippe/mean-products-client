import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/layout/header/header.component';
import { CreateUserComponent } from './components/auth/create-user/create-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'crear-cuenta', component: CreateUserComponent },

  { path: '', component: ListProductsComponent },
  { path: 'login', component: LoginComponent },

  { path: 'crear-producto', component: CreateProductComponent },
  { path: 'editar-producto/:id', component: CreateProductComponent },

  { path: 'header', component: HeaderComponent },

  // { path: '**', redirectTo: '', pathMatch: 'full'}
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
