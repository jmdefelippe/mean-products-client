import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './components/auth/create-user/create-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'crear-cuenta', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ListProductsComponent },
  { path: 'crear-producto', component: CreateProductComponent },
  { path: 'editar-producto/:id', component: CreateProductComponent },
  { path: 'detalle-producto/:id', component: ProductDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
