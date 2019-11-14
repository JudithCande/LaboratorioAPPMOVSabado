import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';
import {AgregarMovimientosPage } from './agregar-movimientos/agregar-movimientos.page';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  public movimientos;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.movimientos = [
      { Cantidad: -18.00, Descripcion: '7-seven', tipo: 2, cuenta:{ nombre: 'Credito Banorte', id: 1}, 
      etiqueta: { id: 1, Descripcion: 'Comida'}},
      { Cantidad: -360.00, Descripcion: 'Pago agua', tipo: 2, cuenta:{ nombre: 'Debito Banregio', id: 2}, 
      etiqueta: { id: 2, Descripcion: 'Hogar'}},
      { Cantidad: +7500.00, Descripcion: 'Quincena', tipo: 1, cuenta:{ nombre: 'Debito Banamex', id: 1}, 
      etiqueta: { id: 1, Descripcion: 'Sueldo'}},
      { Cantidad: -2500.00, Descripcion: 'Colegiatura', tipo: 2, cuenta:{ nombre: 'Credito BBVA', id: 1}, 
      etiqueta: { id: 1, Descripcion: 'Educacion'}}
    ];
  }
  async onAgregarMovimientos(){
    const modal = await this.modalController.create({
      component: AgregarMovimientosPage,
      componentProps: {
        titulo: 'Agregar Movimientos'
      }
    });
    return await modal.present();
  }
}
