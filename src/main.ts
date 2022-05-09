import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './app/+state';
import { AboutComponent } from './app/about/about.component';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { TicketsModule } from './app/tickets/tickets.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      RouterModule.forRoot([
        {
          path: '',
          pathMatch: 'full',
          component: HomeComponent,
        },
        {
          path: 'about',
          component: AboutComponent,
        },
        {
          path: 'flight-booking',
          loadChildren: () =>
            import('@demo/booking').then((m) => m.flightBookingRoutes),
        },
      ]),
      TicketsModule
    ),
    importProvidersFrom(LayoutModule),
    importProvidersFrom(
      StoreModule.forRoot({ reducer }),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument()
    ),
  ],
}).catch((err) => console.error(err));
