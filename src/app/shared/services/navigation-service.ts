import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Menu } from "../interfaces/menu";


@Injectable()
export class NavigationService {

  iconMenu: Menu[] = [
    {
    name: 'Document',
    type: "link",
    state: 'Home/producto'
  },
  {
    name: 'Información',
    type: "link",
    state: 'Home/Insumos'
  }
];


  iconTypeMenuTitle: string = "Frequently Accessed";
  MenuItems = new BehaviorSubject<Menu[]>(this.iconMenu);

  menuItems$ = this.MenuItems.asObservable();


  publishNavigationChange(menuType: string) {
    this.MenuItems.next(this.iconMenu);
  }
}


