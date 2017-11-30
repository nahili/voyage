import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MenuItem } from './menu';

@Injectable()
export class ContextService {

  // Contextual menu
  public contextualMenu:Array<MenuItem>;
  // Currently shown menu ID
  public currentMenuItem:string;
  // Current date
  public currentDate:Subject<Date> = new Subject();
  // Current place
  public currentPlace:Subject<string> = new Subject();

  constructor() { }

}
