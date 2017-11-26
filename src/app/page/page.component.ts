import { Component, OnInit, Input } from '@angular/core';

import { Page, Segment, SegmentType } from '../page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() page:Page;

  constructor() { }

  ngOnInit() {

  }

}
