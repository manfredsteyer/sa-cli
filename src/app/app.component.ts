import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Component } from './standalone-shim';
import { all } from './utils';

// Options for importing esm modules
import { NavbarComponent, SidebarComponent } from './shell';
// import * as shell from '@demo/shell';
// import * as shell from './shell';

@Component({
  standalone: true,
  selector: 'app-root',
  //imports: [...all(shell)],
  imports: [
    NavbarComponent, 
    SidebarComponent,
    // ...all(shell),
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
        loadChildren: () => import('./booking/flight-booking.component')
          .then(m => m.FlightBookingComponent['module'])
      }
    ])
  
  ],
  template: require('./app.component.html')
})
export class AppComponent {
}
