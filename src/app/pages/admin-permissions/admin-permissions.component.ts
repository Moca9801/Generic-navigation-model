import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

interface TableRow {
  username: string;
  name: string;
  write: boolean;
  update: boolean;
  select: boolean;
  delete: boolean;
  total: number;
  originalData: {
    write: boolean;
    update: boolean;
    select: boolean;
    delete: boolean;
  };
}

interface BackendData {
  username: string;
  name: string;
  total: number;
  // Agrega otras propiedades si es necesario
}

@Component({
  selector: 'app-admin-permissions',
  templateUrl: './admin-permissions.component.html',
  styleUrls: ['./admin-permissions.component.scss']
})


export class AdminPermissionsComponent implements OnInit {
  
  tableHeaders = ['USERNAME', 'MODULE', 'WRITE', 'UPDATE', 'SELECT', 'DELETE', 'TOTAL'];
  tableData: TableRow[] = [
    {username: 'ANGEL', name: 'GENERAR' , write: false, update: false, select: false, delete: false, total: 0, originalData: {write: true, update: true, select: true, delete: true}},
    {username: 'ANGEL', name: 'REPORTE' , write: false, update: false, select: false, delete: false, total: 0, originalData: {write: true, update: true, select: true, delete: true}},
    {username: 'ANGEL', name: 'REG. EXP', write: false, update: false, select: false, delete: false, total: 0, originalData: {write: true, update: true, select: true, delete: true}},
  ];

  filteredData: TableRow[] = []; // Esta será la tabla filtrada

  constructor(private crudService: CrudService){
    this.filteredData = this.tableData
  }

  ngOnInit(): void {
    this.getAllPermissions();  
  }

  async getAllPermissions() {
    let data = await this.crudService.get("api/v1/permissions/");
    const transformedData: TableRow[] = data.body.data.map((item: BackendData) => {
        const { write, update, select, delete: del } = this.conditions(item.total);
        return {
            username: item.username,
            name: item.name,
            write: write,
            update: update,
            select: select,
            delete: del,
            total: item.total,
            originalData: { write: true, update: true, select: true, delete: true }
        };
    });

    this.tableData = transformedData;
    this.filteredData = this.tableData;
}

  calcularTotal(write: boolean, update: boolean, select: boolean, deleteVal: boolean): number {
    return (write ? 9 : 0) + (update ? 4 : 0) + (select ? 2 : 0) + (deleteVal ? 1 : 0);
  }


  onCheckboxChange(rowData: TableRow, columnName: keyof TableRow, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.updateCheckbox(rowData, columnName, checkbox.checked);
  }

  updateCheckbox(rowData: TableRow, columnName: keyof TableRow, value: boolean): void {
    const temp: any = rowData;
    temp[columnName] = value;
    rowData.total = this.calcularTotal(rowData.write, rowData.update, rowData.select, rowData.delete);
    rowData.total = 5
  }

  guardarCambios(): void {
    this.tableData.forEach(row => {
      row.originalData.write = row.write;
      row.originalData.update = row.update;
      row.originalData.select = row.select;
      row.originalData.delete = row.delete;
    });
  }

  filterByUser(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();

    if (!filterValue) {
      this.filteredData = [...this.tableData]; // Si no hay valor de filtro, muestra todos los datos
    } else {
      this.filteredData = this.tableData.filter((row) =>
        row.username.toLowerCase().includes(filterValue)
      );
    }
  }

  conditions(total: any = 9) {
    let write:any = 0;
    let update:any = 0;
    let select:any = 0;
    let del:any = 0;

    switch (total) {
        case 1:
            del = 1;
            break;
        case 2:
            select = 2;
            break;
        case 3:
            select = 2;
            del = 1;
            break;
        case 4:
            write = 4;
            break;
        case 5:
            write = 4;
            del = 1;
            break;
        case 6:
            write = 4;
            select = 2;
            break;
        case 7:
            write = 4;
            select = 2;
            del = 1;
            break;
        case 9:
            write = 9;
            break;
        case 10:
            write = 9;
            del = 1;
            break;
        case 11:
            write = 9;
            select = 2;
            break;
        case 12:
            write = 9;
            select = 2;
            del = 1;
            break;
        case 13:
            write = 9;
            update = 4;
            break;
        case 14:
            write = 9;
            update = 4;
            del = 1;
            break;
        case 15:
            write = 9;
            update = 4;
            select = 2;
            break;
        case 16:
            write = 9;
            update = 4;
            select = 2;
            del = 1;
            break;
        default:
          write = undefined;
          update = undefined;
          select = undefined;
          del = undefined;
          break
    }
    console.log('TOTAL:' +  total)
    console.log('WRITE:' +  write)
    console.log('UPDATE:' +  update)
    console.log('SELECT:' +  select)
    console.log('DELETE:' +  del)

    return { write, update, select, delete: del };
}

}
