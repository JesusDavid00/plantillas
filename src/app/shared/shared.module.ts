import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import service aqui en (providers)
 import {NavigationService} from '../shared/services/navigation-service'
 import {RoutePartsService} from './services/route-parts.service'
 // Los modulos s incorporan en el export para qe sean visibles en cual quier lugar e inportan
 import { ComponentsModule } from './components/components.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedPipesModule

  ],
  providers:[
   NavigationService,
   RoutePartsService
  ],
  exports:[
    ComponentsModule,
    SharedPipesModule
  ]
})
export class SharedModule { }
