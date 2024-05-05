import {Injectable} from "@angular/core";


export interface Menu {
  state: string;
  name: string;
  icon: string;
  type: string;
  role: string;
}

const MENUITEMS = [
  {state: 'dashboard', name: 'Dashboard', icon: 'dashboard', type: 'link', role: ''},
  {state: 'category', name: 'Manage Category', icon: 'category', type: 'link', role: 'admin'},
  {state: 'product', name: 'Manage Product', icon: 'inventory_2', type: 'link', role: 'admin'},
  {state: 'order', name: 'Manage Order', icon: 'shopping_cart', type: 'link', role: ''},
  {state: 'bill', name: 'View Bill', icon: 'backup_table', type: 'link', role: ''}
];

@Injectable()
export class MenuItems {
  getMenuItems(): Menu[] {
    return MENUITEMS;
  }
}
