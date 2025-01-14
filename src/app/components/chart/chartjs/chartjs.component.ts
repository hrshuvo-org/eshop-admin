import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/chart/chartjs';
import 'chartjs-adapter-moment'
import { add, parseISO } from 'date-fns';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

 //Line Chart
 public lineChartOptions = chartData.lineChartOptions
 public lineChartData = chartData.lineChartData
 public lineChartType = chartData.lineChartType

 //Line Chart
 public MultipleChartOptions = chartData.multipleChartOptions
 public MultipleChartData = chartData.multipleChartData
 public MultipleChartType = chartData.multipleChartType
 // events
 public chartClicked({ event, active }: { event?: any | any, active?: {}[] }): void {
   // console.log(event, active);
 }

 public chartHovered({ event, active }: { event?: any | any, active?: {}[] }): void {
   // console.log(event, active);
 }

 // Bar Chart 1
 public barChartOptions = chartData.barChartOptions;
 public barChartData = chartData.barChartData;
 public barChartType = chartData.barChartType;
 
 // //Doughnut and Pie Chart Data
 public doughnutChartLabels = chartData.doughnutChartLabels;
 public doughnutChartData = chartData.doughnutChartData;
 public doughnutChartType = chartData.doughnutChartType;

 public pieChartData = chartData.pieChartData;
 public pieChartType = chartData.pieChartType;
 public pieChartOptions = chartData.pieChartOptions;
 
 // //Radar Chart
 public radarChartData = chartData.radarChartData;
 public radarChartOptions = chartData.radarChartOptions;
 public radarChartType = chartData.radarChartType;

 // //Polar Chart
 public polarAreaChartData = chartData.polarAreaChartData;
 public polarAreaLegend = chartData.polarAreaLegend;
 public polarAreaChartType = chartData.polarAreaChartType;
 
 barCount = 60;
 initialDateStr = '2017-04-01T00:00:00';

 constructor() {
 }

 randomNumber(min: number, max: number): number {
   return Math.random() * (max - min) + min;
 }

 randomBar(date: Date, lastClose: number): { c: number; x: number; h: number; l: number; o: number } {
   const open = this.randomNumber(lastClose * 0.95, lastClose * 1.05);
   const close = this.randomNumber(open * 0.95, open * 1.05);
   const high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
   const low = this.randomNumber(Math.min(open, close) * 0.9, Math.min(open, close));
   return {
     x: +date,
     o: open,
     h: high,
     l: low,
     c: close
   };
 }

 getRandomData(dateStr: string, count: number): { c: number; x: number; h: number; l: number; o: number }[] {
   let date = parseISO(dateStr);
   const data = [ this.randomBar(date, 30) ];
   while (data.length < count) {
     date = add(date, { days: 1 });
     if (date.getDay() <= 5) {
       data.push(this.randomBar(date, data[data.length - 1].c));
     }
   }
   return data;
 }

 ngOnInit(): void {
 } 

}
