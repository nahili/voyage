import { Observable } from 'rxjs/Observable';

// A menu item has only the properties necessary for a menu
export class MenuItem {
  id: string; // Id of the page to be callable
  name: string; // Visible name of the menu
  level: number; // Menu level
  url: string; // Internal URL to call for this item
  parent?: string; // Parent ID, if applicable
}
