import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { CrudService } from 'src/app/services/crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface ParametrosUpdate {
  fecha?: any;
}

@Component({
  selector: 'app-cuadrante-registrar-fecha',
  templateUrl: './cuadrante-registrar-fecha.component.html',
  styleUrls: ['./cuadrante-registrar-fecha.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule,FormsModule,CommonModule],
})
export class CuadranteRegistrarFechaComponent implements OnInit {

  selected: any
  mostrarAlerta = false;
  mensajeAlerta = '';
  fechaSeleccionada: boolean = false;
  guardarDeshabilitado = false;

  constructor(private crudService: CrudService){
    this.selected= null
  }

  ngOnInit(): void {
  }

  checkFecha() {
    this.fechaSeleccionada = !!this.selected;
    this.guardarDeshabilitado = !this.fechaSeleccionada;
  }

  ocultarAlerta(): void {
    setTimeout(() => {
      this.mostrarAlerta = false;
    }, 5000);
  }

  mostrarMensajeAlerta(mensaje: string): void {
    this.mostrarAlerta = true;
    this.mensajeAlerta = mensaje;
    this.ocultarAlerta();
  }

  async actualizarFecha() {
    try {
      const body: ParametrosUpdate = {
        fecha:this.selected
      };
      if (this.fechaSeleccionada) {
        const param : {} = {
          "url": "api/v1/peoples/",
          "body": body
        }

          const response = await this.crudService.put(param);

          if (response.body.message === 'Operation successfully completed') {
          
            this.mostrarMensajeAlerta('Expediente actualizado satisfactoriamente');
            this.selected = null;
          } else {
            this.mostrarMensajeAlerta('Error al actualizar expediente');
          }
        } else {
          // Muestra un mensaje de error o realiza alguna acción adicional si es necesario
          console.log('Seleccione una fecha antes de guardar cambios');
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
      this.mostrarMensajeAlerta('Error al actualizar expediente');
    }
  }
  cancelar(): void {
    this.selected = '';
    this.guardarDeshabilitado = true;
  }
}
