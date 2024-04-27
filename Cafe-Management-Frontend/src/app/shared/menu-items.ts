import {Injectable} from "@angular/core";


export interface Menu {
  state: string;
  name: string;
  icon: string;
  type: string;
  role: string;
}

const MENUITEMS = [{state: 'dashboard', name: 'Dashboard', icon: 'dashboard', type: 'link', role: ''}];

@Injectable()
export class MenuItems {
  getMenuItems(): Menu[] {
    return MENUITEMS;
  }
}
