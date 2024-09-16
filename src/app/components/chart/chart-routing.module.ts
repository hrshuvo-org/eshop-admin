import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EChartsComponent } from './echarts/echarts.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex-charts',
        component: ApexChartsComponent
      },
      {
        path: 'e-charts',
        component: EChartsComponent
      },
      {
        path: 'ngxcharts',
        component: NgxChartsComponent
      },
      {
        path: 'chartjs',
        component: ChartjsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
