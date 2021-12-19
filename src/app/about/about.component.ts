import { ViewChild, ViewContainerRef } from "@angular/core";
import { Component } from "../standalone-shim";

@Component({
  standalone: true,
  selector: 'app-about',
  template: require('./about.component.html')
})
export class AboutComponent {
  title = 'Standalone Demo';

  @ViewChild('container', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  async ngOnInit() {
    const esm = await import('./lazy/lazy.component');
    const ref = this.viewContainer.createComponent(esm.LazyComponent)
    ref.instance.title = `You've been haaacked!!`;
  }
}
