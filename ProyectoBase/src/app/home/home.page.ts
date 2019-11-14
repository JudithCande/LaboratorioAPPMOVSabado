import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
// import { Chart } from "chart.js";

// @Component({
//   selector: "app-home",
//   templateUrl: "home.page.html",
//   styleUrls: ["home.page.scss"]
// })
// export class HomePage implements OnInit {
//   @ViewChild('doughnutCanvas', {static: false}) doughnutCanvas: ElementRef;
//   private doughnutChart: Chart;
//   constructor() {}

//   ngOnInit() {
//     this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
//       type: "doughnut",
//       data: {
//         labels: ["Deuda", "Hogar", "Alimento", "Entretenimiento", "Transporte", "Educacion", "Regalos", "Viajes", "Ingresos", "Ropa y Calazado"],
//         datasets: [
//           {
//             label: "# de Porcentaje",
//             data: [10,10,10,10,10,10,10,10,10,10], //la suma de los porcentaje deben dar 100
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)",
//               "rgba(75, 192, 192, 0.2)",
//               "rgba(153, 102, 255, 0.2)",
//               "rgba(4, 66, 58, 1)", 
//               "rgba(1, 135, 202, 1)",
//               "rgba(68, 144, 13, 1)",  
//               "rgba(219, 10, 83, 0.9)",
//               "rgba(10, 219, 41, 0.95)"
//             ],
//             hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#04423A", "#0187CA","#44900D","DB0A53", "#0ADB29", "#FFCE56", "#FFCE56", "#FFCE56", "#FFCE56"
//         ]
//       }
//     }
//     });
// }