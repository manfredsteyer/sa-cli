import { NavbarComponent } from './shell/navbar/navbar.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
   imports: [
      BrowserModule
   ],
   declarations: [
      SidebarComponent,
      NavbarComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
