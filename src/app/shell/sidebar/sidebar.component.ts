import { RouterModule } from '@angular/router';
import { Component } from '../../standalone-shim';

@Component({
    standalone: true,
    selector: 'app-sidebar-cmp',
    imports: [RouterModule],
    template: require('./sidebar.component.html'),
})
export class SidebarComponent {
}
