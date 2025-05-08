import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: false
})
export class SidebarComponent {
  currentView: string = 'formReactive';

  showView(viewName: string) {
    this.currentView = viewName;
  }
}