import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap }  from '@angular/router';

import { MenuItem } from '../menu';
import { ContextService } from '../context.service';
import { config } from '../../config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private config:any;

  constructor(
    private route: ActivatedRoute,
    private context: ContextService
  ) {
    this.config = config;
  }

  ngOnInit() {

  }

}
