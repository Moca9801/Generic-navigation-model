import { CommonModule, KeyValue  } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-consultas-expedientes',
  templateUrl: './consultas-expedientes.component.html',
  styleUrls: ['./consultas-expedientes.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule],
})
export class ConsultasExpedientesComponent {
  fechaHoy: Date = new Date();
  fechaHoyFormateada: string | null;

  tableHeaders_1 = ['EXP', 'TIPO', 'NOMBRE'];
  tableData_1: any[][] = [];
  mostrarAlerta = false;
  mensajeAlerta = '';
  nombreExpediente = '';

  constructor(private crudService: CrudService){
    // Formatear la fecha según tus necesidades (por ejemplo, 'dd/MM/yyyy')
    this.fechaHoyFormateada = this.formatoPersonalizado(this.fechaHoy, 'dd/MM/yyyy');
  }

  formatoPersonalizado(fecha: Date, formato: string): string {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
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

  async buscarExpediente(): Promise<void> {
    try {
      const response = await this.crudService.get(`api/v1/people/?parte=${this.nombreExpediente}`);
      this.tableData_1 = Object.values(response.body.data)
        .map((value: any) => Object.values(value));      
      if (response.body.data != '') {
        
        this.mostrarMensajeAlerta('Búsqueda encontrada');
      } else {
        //this.bandera = false;
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

}
