import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlightBookingComponent } from './booking/flight-booking.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent, SidebarComponent } from './shell';
import { Component } from './standalone-shim';

@Component({
  standalone: true,
  selector: 'app-root',
  //imports: [...all(shell)],
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
        // component: FlightBookingComponent
        loadChildren: () => import('./booking/flight-booking.component').then(m => m.FlightBookingComponent['module'])
      }
    ])
  
  ],
  template: require('./app.component.html')
})
export class AppComponent {
}
