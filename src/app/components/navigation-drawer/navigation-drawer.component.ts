import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavigationDrawerComponent {
  
  activeItem:any = this.sharedService.activeItem;
  activeSection:any = this.sharedService.activeSection;
  activeSectionb:any = this.sharedService.activeSectionb;
  activeItemb:any = this.sharedService.activeItemb;
  headerExpanded: boolean = false;
  isExpanded: boolean = false;
  isExpandedb: boolean = false;
  navigationItems = this.sharedService.navigationData;

  ngOnInit() {
    this.sharedService.currentRefreshState.subscribe((shouldRefresh) => {
      if (shouldRefresh) {
        this.activeSection = this.sharedService.activeSection;        
        this.activeItemb = this.sharedService.activeItem;
      }
    });
  }

  constructor(private router: Router, public sharedService: SharedService){}

  handelSectionClick(section: string){
    this.activeSection = this.sharedService.activeSection = section;
    this.activeItem = this.sharedService.activeItem = ''
  }

  handleItemClick(section: string, item: string) {
    this.activeSection =  this.sharedService.activeSection = section;
    this.activeItemb = item;
  
    if(section === 'Cuadrante'){
      if(item === 'Registrar expediente'){
        this.router.navigate(['./dashboard/cuadrante-registrar-expediente']);
      }else if(item === 'Generar'){
        this.router.navigate(['./dashboard/cuadrante-generar']);
      }else if(item === 'Reporte'){
        this.router.navigate(['./dashboard/cuadrante-report']);
      }else if(item === 'Modificar expediente'){
        this.router.navigate(['./dashboard/cuadrante-modificacion-exp']);
      }else if(item === 'Registrar fecha'){
        this.router.navigate(['./dashboard/cuadrante-registrar-fecha']);
      }else if(item === 'Partes'){
        this.router.navigate(['./dashboard/cuadrante-partes']);
      }
    }else if(section === 'Consultas'){
      if(item === 'Cuadrante (acuerdos)'){
        this.router.navigate(['./dashboard/consultas-cuadrante']);
      }else if(item === 'Expediente'){
        this.router.navigate(['./dashboard/consultas-expedientes']);
      }
      else if(item === 'Fe de Erratas'){
        this.router.navigate(['./dashboard/consultas-fe-de-erratas']);
      }
    }else if(section === 'Usuarios'){
      if(item === 'Nuevo'){
        this.router.navigate(['./dashboard/usuarios-nuevo']);
      } else if(item === 'Eliminar'){
        this.router.navigate(['./dashboard/usuarios-eliminar']);
      }
    }else if(section === 'Archivo general'){
      if(item === 'Captura'){
        this.router.navigate(['./dashboard/archivoGeneral-captura']);
      }else if(item === 'Limpiar lista'){
        this.router.navigate(['./dashboard/archivoGeneral-limpiar-lista']);
      }
    }else if(section === 'Catálogos'){
      if(item === 'Tipo de juicio'){
        this.router.navigate(['./dashboard/catalogos-tipo-de-juicio']);
      }
    } else if(section === 'Datos del juzgado'){
      if(item === 'Información'){
        this.router.navigate(['./dashboard/archivoGeneral-exportar'])
      }
    } else if(section === 'Administrador'){
      if(item === 'Permisos'){
        this.router.navigate(['./dashboard/superadmin-permissions'])
      } else if(item === 'Usuarios'){
        this.router.navigate(['./dashboard/superadmin-users'])
      }
    }
  }

  salirPantalla(){
    this.router.navigate(['']);
    this.sharedService.bandera = !this.sharedService.bandera;
  }

}
