import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap }  from '@angular/router';
import { Location } from '@angular/common';

import { config } from '../../config';
import { PageLink, Page } from '../page';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  // Current page
  current: PageLink;
  config: any;

  constructor(
    private pagesService: PagesService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.config = config;
  }

  ngOnInit() {
    // Load the current page to show
    this.route.paramMap.subscribe(
      params => this.pagesService.page(params.get(config.routes.storyId)).subscribe(page => this.changePage(page))
    );
  }

  changePage(page:PageLink):void {
    this.current = page;
  }

}
