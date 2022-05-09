import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlightCardComponent } from '../booking/flight-card/flight-card.component';
import { MyTicketsComponent } from './my-tickets.component';

// This is for demonstrating the interaction between
// code that uses NgModules and code that doesn't.

@NgModule({
  imports: [
    FlightCardComponent,
    CommonModule,
    RouterModule.forChild([
      { path: 'my-tickets', component: MyTicketsComponent },
    ]),
  ],
  declarations: [MyTicketsComponent],
})
export class TicketsModule {}
