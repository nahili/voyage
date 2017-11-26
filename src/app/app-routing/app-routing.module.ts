import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoryComponent } from '../story/story.component';

const routes: Routes = [
  { path: '', redirectTo: '/story/test', pathMatch: 'full' },
  { path: 'story/:id', component: StoryComponent }
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
