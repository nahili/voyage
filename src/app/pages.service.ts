import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Page, PageLink } from './page';

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

}
