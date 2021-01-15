import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderSideComponent } from './header-side/header-side.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { SharedMaterialModule } from '../shared-material.module';
import { AdminLayoutComponent } from './layoust/admin-layout/admin-layout.component';


const components =[
  FooterComponent,
  HeaderSideComponent,
  HeaderTopComponent,
  AdminLayoutComponent
]
@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule
  ],
  declarations: components,
  exports: components,

})
export class ComponentsModule { }
