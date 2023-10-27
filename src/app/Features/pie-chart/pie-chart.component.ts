import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const chartData: Highcharts.Options = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: ' Statistiques des ventes',
        align: 'left'
      },
      subtitle: {
        text: 'bateau de thibault',
        align: 'left'
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      series: [{
        name: 'les produits les plus vendus',
        data: [
          ['Ailes de raie', 16],
          ['Araignées', 12],
          ['Huitres St vaast', 8],
          ['filet julienne', 8],
          ['Moules de pêche', 8],
          ['Lieu jaune de ligne', 6],
          ['Bouquets cuits', 7],
          ['Filet Bar de ligne', 4],
          ['Bar de ligne portion', 3]
        ],
        type: 'pie' // Ajoutez le type ici pour s'assurer qu'il correspond aux attentes de Highcharts
      }]
    };

    Highcharts.chart('pie-chart-container', chartData);
  }
}
