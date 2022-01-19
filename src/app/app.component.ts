import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Component } from './standalone-shim';
import { NavbarComponent, SidebarComponent } from './shell';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    NavbarComponent, 
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '', 
        pathMatch: 'full', 
        component: HomeComponent 
      },
      { 
        path: 'about', 
        component: AboutComponent 
      },
      { 
        path: 'flight-booking', 
        loadChildren: () => 
          import('@demo/booking')
            .then(m => m.FlightBookingComponent['module'])
      }

    ])
  
  ],
  template: require('./app.component.html')
})
export class AppComponent {
}
