import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap }  from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { config } from '../../config';
import { PageLink, Page } from '../page';
import { PagesService } from '../pages.service';
import { MenuItem } from '../menu';
import { ContextService } from '../context.service';

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
    private route: ActivatedRoute,
    private context: ContextService
  ) {
    this.config = config;
  }

  ngOnInit() {
    // Load the current page to show
    this.route.paramMap.subscribe(
      params => this.pagesService.page(params.get(config.routes.storyId)).subscribe(page => this.changePage(page))
    );
    // Set the contextual menu
    this.pagesService.menu().subscribe(menus => this.context.contextualMenu = menus);
  }

  changePage(page:PageLink):void {
    this.current = page;
    // Set the currently active menu item
    this.context.currentMenuItem = page.id;
  }

}
