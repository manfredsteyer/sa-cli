import { Component } from "../standalone-shim";

@Component({
  standalone: true,
  selector: 'app-home',
  template: require('./home.component.html')
})
export class HomeComponent {
  constructor() { }
}
