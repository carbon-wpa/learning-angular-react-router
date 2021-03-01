import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {TermsComponent} from './terms/terms.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './categories/subcategories/subcategories.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [{
      path: 'subcategories',
      component: SubcategoriesComponent
    }]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
