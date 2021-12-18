import { CommonModule } from "@angular/common";
import { Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CityPipe } from "src/app/shared/city.pipe";
import { CityValidator } from "src/app/shared/city.validator";

import { Component } from "../../standalone-shim";
import { FlightCardComponent } from "../flight-card/flight-card.component";
import { FlightService } from "../model/flight.service";

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    FlightCardComponent,
    CityValidator,
  ],
  providers: [FlightService],
  selector: 'flight-search',
  template: require('./flight-search.component.html')
})
export class FlightSearchComponent {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  
  get flights() {
    return this.flightService.flights;
  }

  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(@Inject(FlightService) private flightService: FlightService) {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService.load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

}

