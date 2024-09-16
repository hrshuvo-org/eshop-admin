import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { EChartsComponent } from './echarts/echarts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgChartsModule } from 'ng2-charts';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ApexChartsComponent,
    EChartsComponent,
    ChartjsComponent,
    NgxChartsComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    FormsModule, 
    ReactiveFormsModule,
    NgxChartsModule
  ],
})
export class ChartModule { }
