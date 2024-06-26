import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-archivo-general-limpiar-lista',
  templateUrl: './archivo-general-limpiar-lista.component.html',
  styleUrls: ['./archivo-general-limpiar-lista.component.scss'],
  standalone: true,
  imports: [ CommonModule ]
})
export class ArchivoGeneralLimpiarListaComponent {
  tableHeaders_1 = ['EXP', 'TIPO', 'FCH_ACU', 'FCH_PRO', 'FCH_RES', 'N', 'DI'];
  tableData_1 = [
    ['222222/2022', '-', '12/09/2023', '06/09/2023', '-', 'P', 'N'],
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

}
