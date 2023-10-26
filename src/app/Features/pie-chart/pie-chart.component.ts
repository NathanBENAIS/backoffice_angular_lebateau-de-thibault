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
        name: 'Medals',
        data: [
          ['Norway', 16],
          ['Germany', 12],
          ['USA', 8],
          ['Sweden', 8],
          ['Netherlands', 8],
          ['ROC', 6],
          ['Austria', 7],
          ['Canada', 4],
          ['Japan', 3]
        ],
        type: 'pie' // Ajoutez le type ici pour s'assurer qu'il correspond aux attentes de Highcharts
      }]
    };

    Highcharts.chart('pie-chart-container', chartData);
  }
}
