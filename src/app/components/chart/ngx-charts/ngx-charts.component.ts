import { Component } from '@angular/core';
import * as ngxchart from 'src/app/shared/data/chart/ngx-charts';
@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class NgxChartsComponent {

  colorScheme: any = { domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'] }
  legendPosition = 'below';
  constructor() {
    // Object.assign(this, { multi });
  }
  chart1 = ngxchart.chart1;
  chart2 = ngxchart.chart2;
  chart3 = ngxchart.chart3;
  chart4 = ngxchart.chart4;
  chart5 = ngxchart.chart5;
  chart6 = ngxchart.chart6;
  chart7 = ngxchart.chart7;
  chart8 = ngxchart.chart8;
  chart9 = ngxchart.chart9; 
  labelFormatting(c:any) {
    return `${(c.label)} Population`;
  }
}
