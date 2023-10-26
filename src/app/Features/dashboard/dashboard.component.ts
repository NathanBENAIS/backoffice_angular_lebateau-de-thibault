import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageTitle: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Récupérez le libellé de la page à partir des données de la route active
    this.pageTitle = this.route.snapshot.data['title'];
  }
}
