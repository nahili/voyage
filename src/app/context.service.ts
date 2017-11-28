import { Injectable } from '@angular/core';

import { MenuItem } from './menu';

@Injectable()
export class ContextService {

  // Contextual menu
  public contextualMenu:Array<MenuItem>;
  // Currently shown menu ID
  public currentMenuItem:string;

  constructor() { }

}
