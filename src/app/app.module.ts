import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { SideNavigationComponent } from './sidenav/side-navigation/side-navigation.component';
import { FilterPipe } from '../app/filter.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, SideNavigationComponent, FilterPipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
