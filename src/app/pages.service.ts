import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Page, PageLink } from './page';
import { MenuItem } from './menu';
import { config } from '../config';

import { PAGES } from './pages/pages';

@Injectable()
export class PagesService {

  constructor() { }

  // Return a page for a specific ID
  // Add the next and previous page ID
  page(id:string):Observable<PageLink> {
    // Simple find
    let p:PageLink;
    let i = PAGES.findIndex( p => p.id == id);
    // If not found return null
    if (i!=-1) {
      p = <PageLink> PAGES[i];
      // If there is a next one, assign its ID
      if (i < PAGES.length-1)
        p.next = PAGES[i+1].id;
      // If it's not the first one, assign its ID
      if (i > 0)
        p.previous = PAGES[i-1].id;
    }
    return of(p);
  }

  // Return a menu structure made of all the pages
  menu():Observable<Array<MenuItem>> {
    let menus = new Array<MenuItem>();
    // Go through all the pages and create a simpler structure
    for (let p of PAGES)
      menus.push({
        id:p.id,
        name:p.name,
        parent:p.parent,
        url:config.routes.story + '/' + p.id,
        level:(p.parent ? -1:0) // If the page has no parent, make it level 0
      })
    // Go through all the pages, if one misses a level, find it's parent
    // and use the parent's level + 1. If the parent is nowhere to be found,
    // show an error in the console, set its level to 0 and hope an orphanage will accept it
    let missing;
    do {
      missing=false; // Hey, we start hopefull!
      for (let m of menus)
        if (!m.level) {
          let p = menus.find(t => t.id == m.parent);
          if (p)
            if (p.level != -1)
              m.level = p.level + 1;
            else // Level is missing, we will have to try again later
              missing=true;
          else {
            m.level = 0;
            console.warn(
              "Page " + m.id +
              " has an invalid parent : " + m.parent +
              ", setting its level to 0"
            );
          }
        }
    } while (missing); // We continue until all levels are figured out

    return of(menus);
  }
}
