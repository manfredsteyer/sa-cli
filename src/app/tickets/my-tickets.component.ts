import { Component, OnInit } from '@angular/core';
import { Flight } from '@demo/data';

@Component({
  selector: 'app-my-tickets',
  template: `
    <h2>My Tickets</h2>

    <ng-container *ngFor="let ticket of tickets">
        <flight-card [item]="ticket"></flight-card>
    </ng-container>
  `
})
export class MyTicketsComponent implements OnInit {

  tickets: Flight[] = [
    { id: 4711, from: 'Graz', to: 'Düsseldorf', delayed: false, date: new Date().toISOString()},
    { id: 4712, from: 'Graz', to: 'Paderborn', delayed: false, date: new Date().toISOString()}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
