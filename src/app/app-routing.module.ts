import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/productedit/productedit.component';

const routes: Routes = [
     {
      path: "product", component: ProductListComponent
     },
     {path: "product/add", component: ProductAddComponent},
     {path:"product/:id/edit", component: ProductEditComponent}

    
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
