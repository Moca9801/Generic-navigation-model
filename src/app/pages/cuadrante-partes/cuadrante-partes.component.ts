import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuadrante-partes',
  templateUrl: './cuadrante-partes.component.html',
  styleUrls: ['./cuadrante-partes.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CuadrantePartesComponent {
  tableHeaders = ['A/D', 'Nombre o razón social'];
  tableData = [
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],
    ['531/2022', '-'],

    // Agrega más filas de datos aquí si es necesario
  ];
}
