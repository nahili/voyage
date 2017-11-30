import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageComponent } from './page/page.component';
import { StoryComponent } from './story/story.component';
import { PagesService } from './pages.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { ContextService } from './context.service';
import { MapsService } from './maps.service';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StoryComponent,
    PagenotfoundComponent,
    MenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [
    PagesService,
    ContextService,
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
