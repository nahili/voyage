import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { config } from '../../config';
import { StoryComponent } from '../story/story.component';

const routes: Routes = [
  { path: '', redirectTo: config.routes.story + '/' + config.story.default, pathMatch: 'full' },
  { path: config.routes.story + '/:' + config.routes.storyId, component: StoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
