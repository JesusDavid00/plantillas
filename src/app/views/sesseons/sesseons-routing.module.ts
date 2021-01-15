import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [

  {
    path: '',
    children:[
      {
        path: 'Login',
        component: SigninComponent
      }
    ]
  },
  {
    path: '',
    children:[
      {
        path: 'errors',
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesseonsRoutingModule { }
