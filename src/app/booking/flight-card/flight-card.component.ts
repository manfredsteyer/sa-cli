import { CommonModule } from "@angular/common";
import { EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CityPipe } from "@demo/shared";
import { Component } from "../../standalone-shim";
import { Flight } from "@demo/data";

@Component({
  standalone: true,
  selector: 'flight-card',
  imports: [CommonModule, RouterModule, CityPipe],
  template: require('./flight-card.component.html'),
})
export class FlightCardComponent {
  
  @Input() item: Flight | undefined;
  @Input() selected: boolean | undefined;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Input() showEditButton = true;

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }
}
