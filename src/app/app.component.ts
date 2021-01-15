import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { filter } from 'rxjs/operators';
import { RoutePartsService } from "./shared/services/route-parts.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Senfrulact';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    /* private routePartsService: RoutePartsService, */
    // private themeService: ThemeService,
    // private layout: LayoutService,
    // private renderer: Renderer2
  ) { }
/*   changePageTitle() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange) => {
      var routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
 })
} */
}

