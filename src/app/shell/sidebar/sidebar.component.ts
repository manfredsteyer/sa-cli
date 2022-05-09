import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar-cmp',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
