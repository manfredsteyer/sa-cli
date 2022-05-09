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

    TicketsModule,

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
  template: require('./app.component.html'),
  styles: [`
    .sidenav-container {
      height: 100%;
    }

    .sidenav {
      width: 200px;
    }

    .sidenav .mat-toolbar {
      background: inherit;
    }

    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }

    .app-container {
      padding: 20px;
    }
  `]
})
export class AppComponent implements OnInit {

  isHandset$: Observable<boolean>;

  constructor(@Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }


}
