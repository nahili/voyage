import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageComponent } from './page/page.component';
import { StoryComponent } from './story/story.component';
import { PagesService } from './pages.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { ContextService } from './context.service';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StoryComponent,
    PagenotfoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    PagesService,
    ContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
