import { CommonModule } from "@angular/common";
import { Inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CityValidator } from "@demo/shared";
import { Component } from "../../standalone-shim";
import { FlightCardComponent } from "../flight-card/flight-card.component";
import { Flight, FlightService } from "@demo/data";
import { select, Store } from "@ngrx/store";
import { BookingSlice } from "../+state/reducers";
import { selectFlights } from "../+state/selectors";
import { Observable, take } from "rxjs";
import { OnInitEffects } from "@ngrx/effects";
import { loadFlights } from "../+state/actions";
import { delayFlight } from "../+state/actions";

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    FlightCardComponent,
    CityValidator,
  ],
  // providers: [FlightService],
  selector: 'flight-search',
  template: require('./flight-search.component.html')
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  
  flights$: Observable<Flight[]>;

  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(@Inject(Store) private store: Store<BookingSlice>) {
  }


  ngOnInit(): void {
    this.flights$ = this.store.select(selectFlights);
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(loadFlights({
      from: this.from, 
      to: this.to 
    }));
  }

  delay(): void {
    this.flights$.pipe(take(1)).subscribe(flights => {
      const id = flights[0].id;
      this.store.dispatch(delayFlight({id}));
    });
  }

}

