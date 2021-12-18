import { RouterModule } from '@angular/router';
import { Component } from '../standalone-shim';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@Component({
  standalone: true,
  selector: 'flight-booking',
  imports: [
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
