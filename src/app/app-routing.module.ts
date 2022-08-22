import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateUserComponent } from './components/auth/create-user/create-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'crear-cuenta', component: CreateUserComponent },

  { path: '', component: ListProductsComponent },
  { path: 'login', component: LoginComponent },

  { path: 'crear-producto', component: CreateProductComponent },
  { path: 'editar-producto/:id', component: CreateProductComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full'}
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
