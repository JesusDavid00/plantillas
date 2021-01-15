import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductoComponent } from './producto/producto.component';

import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsumosComponent } from './insumos/insumos.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { InsumoFormComponent } from './modals/insumo-form/insumo-form.component';
import { ProductoFormComponent } from './modals/producto-form/producto-form.component';

@NgModule({
  declarations: [ProductoComponent, InsumosComponent, InsumoFormComponent, ProductoFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
