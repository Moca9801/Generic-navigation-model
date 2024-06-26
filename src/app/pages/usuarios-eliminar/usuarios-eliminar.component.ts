import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios-eliminar',
  templateUrl: './usuarios-eliminar.component.html',
  styleUrls: ['./usuarios-eliminar.component.scss'],
  standalone: true,
  imports: [ CommonModule ]
})
export class UsuariosEliminarComponent {
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
