import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsumosComponent } from './insumos/insumos.component';
import { ProductoComponent } from './producto/producto.component';


 export const HomeRoutes : Routes = [
  {
    path: '',
    children:[
      {
        path: 'producto',
        component: ProductoComponent,
       /*  data: { title: 'Producto'} */
      }]
  },
  {
      path: '',
      children:[
        {
          path: 'Insumos',
          component: InsumosComponent
        }
      ]
  }
];

/* @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { } */
