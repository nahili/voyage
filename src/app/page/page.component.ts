import { Component, OnInit, Input } from '@angular/core';

import { Page, Segment } from '../page';
import { config } from '../../config';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  config:any;

  @Input() page:Page;

  constructor() {
    this.config = config;
  }

  ngOnInit() {

  }

}
