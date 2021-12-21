import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FlightService } from '../data/flight.service';
import { Component } from '../standalone-shim';
import { BookingEffects } from './+state/effects';
import { bookingFeature } from './+state/reducers';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@Component({
  standalone: true,
  selector: 'flight-booking',
  providers: [
  ],
  imports: [
    StoreModule.forFeature(bookingFeature),
    EffectsModule.forFeature([BookingEffects]),
    RouterModule.forChild([{
      path: '',
      component: FlightBookingComponent,
      children: [
        {
          path: 'flight-search',
          component: FlightSearchComponent
        },
        {
          path: 'passenger-search',
          component: PassengerSearchComponent
        },
        {
          path: 'flight-edit/:id',
          component: FlightEditComponent
        }
      ]
    }])
  ],
  template: require('./flight-booking.component.html')
})
export class FlightBookingComponent {
}
