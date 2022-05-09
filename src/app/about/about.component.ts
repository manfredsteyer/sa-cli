import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <h1>About</h1>
    <ng-container #container></ng-container>
  `,
})
export class AboutComponent implements OnInit {
  title = 'Standalone Demo';

  @ViewChild('container', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  async ngOnInit() {
    const esm = await import('./lazy/lazy.component');
    const ref = this.viewContainer.createComponent(esm.LazyComponent);
    ref.instance.title = `I'm so lazy today!!`;
  }
}
