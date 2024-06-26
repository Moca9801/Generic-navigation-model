import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrudService } from 'src/app/services/crud.service';

interface ParametrosUpdate {
  cvejui?: string;
  tipo?: any;
  exp?: any;
  cvejuz?: any;
}

@Component({
  selector: 'app-modificacion-exp',
  templateUrl: './modificacion-exp.component.html',
  styleUrls: ['./modificacion-exp.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule],
})
export class ModificacionExpComponent{
  expediente = '';
  bandera = false;
  tipo = '';
  claveTJ = '';
  tipoJuicio = '';
  cambiosGuardados = false;
  mostrarAlerta = false;
  mensajeAlerta = '';
  tiposDeJuicio: { key: string, value: string }[] = [];
  busquedaTipo: string = '';

  constructor(private crudService: CrudService) {}

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

  async buscarExpediente(): Promise<void> {
    try {
      const encodedExpValue = encodeURIComponent(this.expediente);

      if (this.tipo == "") {
        this.tipo = ".";
      }
      this.tiposDeJuicio.length = 0; 
      let responsejudgment = await this.crudService.get("api/v1/judgments/");
      let pruea=responsejudgment.body;
      if (Array.isArray(pruea.data)) {
        pruea.data.forEach((item: { cve_jui: string, descrip: string }) => {
            this.tiposDeJuicio.push({ key: item.cve_jui, value: item.descrip });
        });
      } 
      const response = await this.crudService.get(`api/v1/exp/?expediente=${encodedExpValue}&tipo=${this.tipo}`);
      if (response.body.data != '') {
        this.bandera = true;
        this.claveTJ = response.body.data[0]?.cve_jui || '';
        
        const tipoEncontrado = this.tiposDeJuicio.find(tipo => tipo.key === this.claveTJ);
        
        if (tipoEncontrado) {
          this.tipoJuicio = tipoEncontrado.key;
        } else {
          this.tipoJuicio = ''; 
        }
        
        this.cambiosGuardados = this.claveTJ !== '' && this.tipoJuicio !== '';
        this.mostrarMensajeAlerta('Búsqueda encontrada');
      } else {
        this.bandera = false;
        this.mostrarMensajeAlerta('Búsqueda no encontrada');
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  async handleKeyboardEvent(event: KeyboardEvent, tipoInput: HTMLInputElement): Promise<void> {
    if (event.key === 'Tab' && event.target === tipoInput) {
      this.buscarExpediente();
    }
  }

  deshabilitarCampos(): void {
    if (!this.tipoJuicio) {
      this.claveTJ = '';
    }
    this.bandera = false;
  }

  async actualizarExpediente() {
    try {
      const body: ParametrosUpdate = {
        exp:this.expediente,
        tipo:this.tipo,
        cvejui: this.tipoJuicio,
      };

      const param : {} = {
        "url": "api/v1/exp/",
        "body": body
      }

      const response = await this.crudService.put(param);

      if (response.body.message === 'Operation successfully completed') {
        this.bandera = true;
        this.claveTJ='';
        this.tipoJuicio='';
        this.mostrarMensajeAlerta('Expediente actualizado satisfactoriamente');
        this.limpiarValores();
      } else {
        this.mostrarMensajeAlerta('Error al actualizar expediente');
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
      this.mostrarMensajeAlerta('Error al actualizar expediente');
    }

    this.deshabilitarCampos();
  }

  limpiarValores() {
    this.expediente = '';
    this.tipo = '';
  }

  cancelar(): void {
    this.expediente = '';
    this.tipo = '';
    this.claveTJ='';
    this.tipoJuicio='';
    this.deshabilitarCampos();
  }

  updateClaveTJ(): void {
    const tipoSeleccionado = this.tiposDeJuicio.find(tipo => tipo.key === this.tipoJuicio);
    if (tipoSeleccionado) {
      this.claveTJ = tipoSeleccionado.key;
    } else {
      this.claveTJ = '';
    }
  }
  
}
