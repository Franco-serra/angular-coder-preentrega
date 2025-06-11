<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../core/services/title.service';
import { ActivatedRoute } from '@angular/router';
=======
import { Component } from '@angular/core';
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
<<<<<<< HEAD
export class DashboardComponent implements OnInit {
  constructor(private titleService: TitleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const title = this.route.snapshot.data['title'] || 'Dashboard';
    this.titleService.setTitle(title);
  }
=======
export class DashboardComponent {

>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
}
