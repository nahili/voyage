import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Page } from './page';

import { PAGES } from './pages/pages';

@Injectable()
export class PagesService {

  constructor() { }

  // Return a page for a specific ID
  page(id:string):Observable<Page> {
    // Simple find
    return of(PAGES.find( p => p.id == id));
  }

}
