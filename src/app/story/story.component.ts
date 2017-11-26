import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap }  from '@angular/router';
import { Location } from '@angular/common';

import { Page } from '../page';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  // Current page
  current: Page;

  constructor(
    private pagesService: PagesService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Load the current page to show
    const id = this.route.snapshot.paramMap.get('id');
    this.pagesService.page(id).subscribe(page => this.current = page);
  }

}
