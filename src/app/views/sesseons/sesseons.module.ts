import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesseonsRoutingModule } from './sesseons-routing.module';
import { ErrorComponent } from './error/error.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
@NgModule({
  declarations: [ErrorComponent, SigninComponent],
  imports: [
    CommonModule,
    SesseonsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SharedMaterialModule,
    RouterModule
  ]
})
export class SesseonsModule { }
