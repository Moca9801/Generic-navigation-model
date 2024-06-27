import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-searcher',
  standalone: true,
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit{
  isInputFocused = false;
  searchValue: any;
  activateClase: boolean = true;
  disableClase: boolean = false;
  navigationItems = this.sharedService.navigationData;
  userEmail: string = '';
  juzgado: string='';
  isLoggedIn: boolean = false;
  admin:boolean = false;


  constructor(public sharedService: SharedService, private router: Router){}

  ngOnInit(): void {}

  hiddenDrawer(){
    this.sharedService.setShowDrawerState(!this.sharedService.showDrawer);
    
    if(this.sharedService.showDrawer === true){
      this.activateClase = true;
      this.disableClase = false;
    }else{
      this.activateClase = false;
      this.disableClase = true;
    }
  }

  showDrawerForSmallDevices(){
    this.sharedService.setShowDrawerStateForSmallDevices(true);
    this.sharedService.setShowDrawerState(!this.sharedService.showDrawer);

  }

  userInput: string = '';
  countries: string[] = [
    "Registrar expediente",
    "Generar",
    "Reporte",
    "Modificar expediente",
    "Registrar fecha",
    "Partes",
    "Cuadrante (acuerdos)",
    "Expediente",
    "Fe de Erratas",
    "Captura",
    "Limpiar lista",
    "Tipo de juicio",
    "Información"
  ]


  filteredCountries: string[] = [];

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.userInput = inputElement.value;
      this.filterCountries();
    }
  }

  filterCountries() {
    if (this.userInput === '') {
      this.filteredCountries = [];
      return;
    }
    this.filteredCountries = this.countries.filter(country =>
      country.toLowerCase().includes(this.userInput.toLowerCase())
    );
  }

  selectCountry(route: string) {
    this.userInput = route;
    const selectedValue = route;

    this.sharedService.activeItem = selectedValue;
    
    if(selectedValue === 'Registrar expediente'){
      this.sharedService.activeSection = 'Cuadrante';
      this.router.navigate(['./cuadrante-registrar-expediente']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Generar'){
      this.sharedService.activeSection = 'Cuadrante';
      this.router.navigate(['./cuadrante-generar']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Reporte'){
      this.sharedService.activeSection = 'Cuadrante';
      this.router.navigate(['./cuadrante-report']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Modificar expediente'){
      this.sharedService.activeSection = 'Cuadrante';
      this.router.navigate(['./cuadrante-modificacion-exp']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Registrar fecha'){
      this.sharedService.activeSection = 'Cuadrante';
      this.router.navigate(['./cuadrante-registrar-fecha']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Partes'){
      this.sharedService.activeSection = 'Cuadrante';
      this.router.navigate(['./cuadrante-partes']);
      this.sharedService.triggerRefresh();
    }
    else if(selectedValue === 'Cuadrante (acuerdos)'){
      this.sharedService.activeSection = 'Consultas';
      this.router.navigate(['./consultas-cuadrante']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Expediente'){
      this.sharedService.activeSection = 'Consultas';
      this.router.navigate(['./consultas-expedientes']);
      this.sharedService.triggerRefresh();
    }
    else if(selectedValue === 'Fe de Erratas'){
      this.sharedService.activeSection = 'Consultas';
      this.router.navigate(['./consultas-fe-de-erratas']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Captura'){
      this.sharedService.activeSection = 'Archivo general';
      this.router.navigate(['./archivoGeneral-captura']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Limpiar lista'){
      this.sharedService.activeSection = 'Archivo general';
      this.router.navigate(['./archivoGeneral-limpiar-lista']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Tipo de juicio'){
      this.sharedService.activeSection = 'Catálogos';
      this.router.navigate(['./catalogos-tipo-de-juicio']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Información'){
      this.sharedService.activeSection = 'Datos del juzgado';
      this.router.navigate(['./datos-del-juzgado-informacion']);
      this.sharedService.triggerRefresh();
    }
    this.filteredCountries = [];
  }

  getCookie(name: string): string | null {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='));

    return cookieValue ? cookieValue.split('=')[1] : null;
  }

  deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  exit(){
    const tokenCookie = this.getCookie('TOKEN');
    if (tokenCookie) {
      this.deleteCookie('TOKEN');
    }
    this.router.navigate(['']);
    this.sharedService.bandera = !this.sharedService.bandera;
  }
}

