import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { SideNavigationComponent } from './sidenav/side-navigation/side-navigation.component';
import { SearchBarComponent } from './home/search/search-bar/search-bar.component';
import { ItemsListComponent } from './home/items-list/items-list/items-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, SideNavigationComponent, SearchBarComponent, ItemsListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
