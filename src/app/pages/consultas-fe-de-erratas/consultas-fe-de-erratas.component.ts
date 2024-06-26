import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-consultas-fe-de-erratas',
  templateUrl: './consultas-fe-de-erratas.component.html',
  styleUrls: ['./consultas-fe-de-erratas.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ConsultasFeDeErratasComponent implements OnInit {
  tableHeaders_1 = ['FECHA', 'CLAVE JUZGADO', 'FE DE ERRATA'];
  tableData_1:{ cve_juz: any; fe: any; fecha: string }[] = [];
  dateToSearch: string ='';
  noResultsQuery: boolean =false;

  constructor(
    private crudService:CrudService
    )
  {}
  ngOnInit(): void {
  }

  async searchByDate(event: any){
    this.tableData_1 =[];
    this.dateToSearch = event.target.value;
    try{
      const  return_selected_date = await this.crudService.get(`api/v1/erratumNote/?date=${this.dateToSearch}`)
      if(return_selected_date){
        this.noResultsQuery = false
        const formattedData:{ cve_juz: any; fe: any; fecha: string }[] = return_selected_date.body.data.map((item: { fecha: string | number | Date; cve_juz: any; fe: any; }) =>{
          const date = new Date (item.fecha);
          const formattedDate = new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
          return{
            cve_juz:item.cve_juz,
            fe: item.fe,
            fecha: formattedDate
          };
        })
        this.tableData_1.push(...formattedData)

      }
    }catch(error){
      let realError:any =error
      if(realError.error.message =="Query completed successfully, however no data was found"){
        this.noResultsQuery = true
      }

    }

  }

}

