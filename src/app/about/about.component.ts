import { FlightService } from "../booking/model/flight.service";
import { Component } from "../standalone-shim";

@Component({
  standalone: true,
  selector: 'app-about',
  template: require('./about.component.html')
})
export class AboutComponent {
}
