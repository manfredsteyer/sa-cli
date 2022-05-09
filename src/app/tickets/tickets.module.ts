import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from '../booking/flight-card/flight-card.component';
import { MyTicketsComponent } from './my-tickets.component';
import { RouterModule } from '@angular/router';

// This is for demonstrating the interaction between
// code that uses NgModules and code that doesn't.

// This line is just needed to make it work with the Shim
const FlightCardComp = FlightCardComponent['module'] || FlightCardComponent;


@NgModule({
  imports: [
    FlightCardComp,
    CommonModule,
    RouterModule.forChild([
      { path: 'my-tickets', component: MyTicketsComponent }
    ])
  ],
  declarations: [
    MyTicketsComponent
  ],
})
export class TicketsModule { }
