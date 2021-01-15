import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layoust/admin-layout/admin-layout.component';


export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "Sesseson/Login",
    pathMatch: "full"
  },
/*   {
    path: "",
    redirectTo: "Home/producto",
    pathMatch: "full"
  }, */

  {
    path: "",
    component: AdminLayoutComponent,
    children:[
      {
        path:"Home",
        loadChildren:()=>
        import("./views/home/home.module").then(m => m.HomeModule)
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "Sesseson",
        loadChildren: () =>
          import("./views/sesseons/sesseons.module").then(m => m.SesseonsModule),

      }
    ]
  }/* ,
  {
    path: '**',
    redirectTo: "Sesseson/errors",
    pathMatch: "full"
    }, */
];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
