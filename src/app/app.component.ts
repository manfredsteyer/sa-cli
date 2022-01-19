import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Component } from './standalone-shim';
import { all } from './utils';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Options for importing esm modules
import { NavbarComponent, SidebarComponent } from './shell';
// import * as shell from '@demo/shell';
import * as shell from './shell';
import { reducer } from './+state';
import { TicketsModule } from './tickets/tickets.module';
import * as material from './material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { Inject, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    ...Object.values(shell) as any[],
    ...Object.values(material) as any[],
    TicketsModule,
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
      // { 
      //   path: 'flight-booking', 
      //   loadChildren: () => 
      //       import('./booking/flight-booking.component')
      //         .then(m => m.FlightBookingComponent['module'])
      // }
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
