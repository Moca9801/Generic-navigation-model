import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public bandera: boolean = false;
  public showDrawer: boolean = true;
  public showDrawerForSmallDevices: boolean = false;
  public widthDrawer: string = '250px';
  public activeItem: string | null = null;
  public activeItemb: string | null = null;
  public activeSection: string | null = null;
  public activeSectionb: string | null = null;
  public navigationData = [
    {
      section: 'Cuadrante',
      items: [
        'Registrar expediente',
        'Generar',
        'Reporte',
        'Modificar expediente',
        'Registrar fecha',
        'Partes'
      ]
    },
    {
      section: 'Consultas',
      items: [
        'Cuadrante (acuerdos)',
        'Expediente',
        'Fe de Erratas'
      ]
    },
    /*{
      section: 'Usuarios',
      items: [
        'Nuevo',
        'Eliminar'
      ]
    },*/
    {
      section: 'Archivo general',
      items: [
        'Captura',
        'Limpiar lista',
      ]
    },
    {
      section: 'Catálogos',
      items: [
        'Tipo de juicio'
      ]
    },
    {
      section: 'Datos del juzgado',
      items: [
        'Información'
      ]
    },
    {
      section: 'Administrador',
      items: [
        'Permisos',
        'Usuarios',
      ],
    },
  ];

  constructor(private cookieService: CookieService, private router: Router) {
    const tokenCookie = this.cookieService.get('TOKEN');
    this.bandera = !tokenCookie;
  }

  private refreshComponent = new BehaviorSubject<boolean>(false);
  currentRefreshState = this.refreshComponent.asObservable();

  private showDrawerState = new BehaviorSubject<boolean>(this.showDrawer)
  showDrawerState$ = this.showDrawerState.asObservable();

  setShowDrawerState(newState: boolean) {
    this.showDrawer = newState;
    this.showDrawerState.next(newState);
  }

  private showDrawerForSmallDevicesState = new BehaviorSubject<boolean>(this.showDrawerForSmallDevices)
  showDrawerForSmallDevicesState$ = this.showDrawerForSmallDevicesState.asObservable();

  setShowDrawerStateForSmallDevices(newState: boolean) {
    this.showDrawerForSmallDevices = newState;
    this.showDrawerForSmallDevicesState.next(newState);
  }
  
  triggerRefresh() {
    this.refreshComponent.next(true);
  }

  validityToken(error: any){
    if(error.error.error === 'Token expired' || error.error.error === 'Token not provided'){
        document.cookie = `TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        this.bandera = true;
        this.router.navigate(['']);
    } 
  }
}