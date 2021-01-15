import { Component, OnInit , Renderer2 ,Input , OnDestroy} from '@angular/core';
import { NavigationService } from '../../services/navigation-service';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit , OnDestroy{
  layoutConf: any;
  menuItems:any;
  menuItemSub:Subscription;
  egretThemes: any[] = [];
  @Input() notificPanel;

  constructor(private navService:     NavigationService,
              private layout:         LayoutService,
              /* private translate: TranslateService, */
              private Renderer: Renderer2) {

  }

  ngOnInit(){
    this.layoutConf = this.layout.layoutConf;
    this.menuItemSub = this.navService.menuItems$
    .subscribe(res => {
      res = res.filter(item => item.type !== 'icon' && item.type !== 'separator');
      let limit = 4
      let mainItems:any[] = res.slice(0, limit)
      if(res.length <= limit) {
        return this.menuItems = mainItems
      }
      let subItems:any[] = res.slice(limit, res.length - 1)
      mainItems.push({
        name: 'More',
        type: 'dropDown',
        tooltip: 'More',
        icon: 'more_horiz',
        sub: subItems
      })
      this.menuItems = mainItems
    })
    console.log( "Que estado tengo: ", this.menuItems )
  }
  ngOnDestroy() {
    this.menuItemSub.unsubscribe()
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }

}
