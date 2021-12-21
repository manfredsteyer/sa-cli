import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from '../booking/flight-card/flight-card.component';
import { MyTicketsComponent } from './my-tickets.component';
import { RouterModule } from '@angular/router';

// This is for demonstrating the interaction between
// code that uses NgModules and code that doesn't.

@NgModule({
  imports: [
    CommonModule,
    FlightCardComponent['module'] || FlightCardComponent,
        // The || is just to please the compiler that dosn't know
        // about the shim in place
    RouterModule.forChild([
      { path: 'my-tickets', component: MyTicketsComponent }
    ])
  ],
  declarations: [
    MyTicketsComponent
  ],
})
export class TicketsModule { }
