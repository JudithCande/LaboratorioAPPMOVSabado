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
//               "rgba(255, 159, 64, 0.2)", //color repetido, se tiene que cambiar
//               "rgba(255, 159, 64, 0.2)",//color repetido, se tiene que cambiar
//               "rgba(255, 159, 64, 0.2)",//color repetido, se tiene que cambiar
//               "rgba(255, 159, 64, 0.2)",//color repetido, se tiene que cambiar
//               "rgba(255, 159, 64, 0.2)"//color repetido, se tiene que cambiar
//             ],
//             hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56",/*Apartir de aqui los colores estan repetidos */ "#FFCE56", "#FFCE56", "#FFCE56", "#FFCE56"
//         ]
//       }
//     }
//     });
// }