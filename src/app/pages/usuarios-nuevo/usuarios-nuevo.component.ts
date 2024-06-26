import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios-nuevo',
  templateUrl: './usuarios-nuevo.component.html',
  styleUrls: ['./usuarios-nuevo.component.scss'],
  standalone: true,
  imports: [ CommonModule ]
})
export class UsuariosNuevoComponent {
  tableHeaders_1 = ['NOMBRE'];
  tableData_1 = [
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],
    ['JOSE LUIS PEREZ SANCHEZ'],

    // Agrega más filas de datos aquí si es necesario
  ];
}
