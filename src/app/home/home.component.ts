import { OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Component } from "../standalone-shim";

@Component({
  standalone: true,
  selector: 'app-home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
}
