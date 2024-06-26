import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuadrante-generar',
  templateUrl: './cuadrante-generar.component.html',
  styleUrls: ['./cuadrante-generar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],

})
export class CuadranteGenerarComponent {
  demandaInicial: boolean = false;
  tableHeaders = ['EXP', 'TIPO', 'FCH_ACU', 'FCH_PRO', 'FCH_RES', 'N', 'DI'];
  tableData = [
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
    ['531/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],

    // Agrega más filas de datos aquí si es necesario
  ];

  handleChange() {
    // Lógica que se ejecutará cuando cambie el estado del checkbox
    if (this.demandaInicial) {
      // Agrega aquí la lógica que deseas para el estado verdadero (true)
    } else {
      // Agrega aquí la lógica que deseas para el estado falso (false)
    }
  }
}
