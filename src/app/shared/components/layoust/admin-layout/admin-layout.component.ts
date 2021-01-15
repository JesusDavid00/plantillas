import { Component, OnInit , AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { NavigationEnd, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit{
  public isModuleLoading:            Boolean = false;
  private layoutConfSub:             Subscription;
  private routerEventsub:            Subscription;
  private moduleLoaderSub:           Subscription;
  public  oppend =                  true;

  public layoutConf:                 any = {};
  public adminContainerClasses:      any = {};
  constructor(
    private router: Router,
    public  layout: LayoutService,
    private cdr:    ChangeDetectorRef

  ) { 
    this.routerEventsub = router.events.pipe(filter(Event => Event instanceof NavigationEnd))
    .subscribe((routeChange: NavigationEnd) => {
      this.layout.adjustLayout({route: routeChange.url});
    });
  }

  ngOnInit(): void {
    this.layoutConfSub = this.layout.layoutConf$.subscribe((LayoutConf)=> {
      this.layoutConf = LayoutConf;
      console.log("Que tal como estoy",this.layoutConf);
      console.log("Que pasa esto no quiere servir")
      
      this.adminContainerClasses = this.updateAdminContainerClasses(this.layoutConf);
      this.cdr.markForCheck();
    })

    // FOR MODULE LOADER FLAG
    this.moduleLoaderSub = this.router.events.subscribe(event => {
      if(event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.isModuleLoading = true;
      }
      if(event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.isModuleLoading = false;
      }
    });
    
    
  }
  updateAdminContainerClasses(layoutConf){
    return {
      /* 'navigation-top': layoutConf.navigationPos === 'top' */
    }
  }
  LoadOpend(){
    if (this.oppend){
      this.oppend = false
    }else{
      this.oppend = true
    }
  }
}
