import { Component, OnInit, Inject } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movimientos } from 'src/app/model/movimientos';
import { MovimientosService } from '../movimientos.service';
import { Router } from '@angular/router';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-agregar-movimientos',
  templateUrl: './agregar-movimientos.page.html',
  styleUrls: ['./agregar-movimientos.page.scss'],
})
export class AgregarMovimientosPage implements OnInit {

  titulo: string;
  registrarForm: FormGroup;
  movimientos: Movimientos;
  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private MovimientosService: MovimientosService,
    private router: Router,
    private alertController: AlertController,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
    this.registrarForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      cantidad: ['', [Validators.required]]
      });
  }

  ngOnInit() {
    console.log(this.titulo);
  }

  get f() { return this.registrarForm.controls; }

  async cerrarModal() {
    await this.modalController.dismiss();
  }


  registrar() {
    this.movimientos = new Movimientos();
    this.movimientos.nombre = this.registrarForm.controls.nombre.value;
    this.movimientos.Cantidad = this.registrarForm.controls.cantidad.value;
    this.movimientos.usuario = new Usuario();
    this.movimientos.usuario.correo= this.storage.get('correo');
    this.MovimientosService.save(this.movimientos).subscribe(
      value => {
        this.cuentaCreada();
      },
      error => {
        this.error(error.error.mensaje)
      }
    );
  }

  async cuentaCreada() {
    const alert = await this.alertController.create({
      header: 'Finixer',
      subHeader: '',
      message: 'Cuenta registrada con exito',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.cerrarModal();
        }
      }]
    });

    await alert.present();
  }

  async error(error: string){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Error',
      message: error,
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.registrarForm.controls.nombre.setErrors(Validators.required);
          this.registrarForm.controls.cantidad.setErrors(Validators.required);
        }
      }]
    });

    await alert.present();
  }

}