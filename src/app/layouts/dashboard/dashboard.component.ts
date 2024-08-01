import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardFooterComponent } from 'src/app/components/dashboard-footer/dashboard-footer.component';
import { NavigationDrawerComponent } from 'src/app/components/navigation-drawer/navigation-drawer.component';
import { SearcherComponent } from 'src/app/components/searcher/searcher.component';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, SearcherComponent, RouterOutlet, NavigationDrawerComponent, DashboardFooterComponent]
})
export class DashboardComponent implements OnInit{
  title = 'TemplateGenericNavModel';
  widthDrawer: any;
  isMobile: boolean = false;
  helper: boolean = false;

  @HostListener('document:click', ['$event'])
  documentClickHandler(event: MouseEvent) {
    const navDrawer = document.getElementById('navDrawer');
    if (this.isMobile == true && this.sharedService.showDrawerForSmallDevices == true && navDrawer && !navDrawer.contains(event.target as Node)) {
      if(this.sharedService.showDrawerForSmallDevices){
        this.sharedService.setShowDrawerStateForSmallDevices(false);       
        this.sharedService.setShowDrawerState(true);        

      }else{
        this.sharedService.setShowDrawerStateForSmallDevices(true);       
        this.sharedService.setShowDrawerState(false); 
        // Aquí puedes realizar las acciones deseadas
      }
      // El clic ocurrió fuera de app-navigation-drawer
      //this.sharedService.setShowDrawerState(false);        // Aquí puedes realizar las acciones deseadas
    }else{

    }
  }
 
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.showDrawerState$.subscribe(event=>{
      if(event === true){
        this.sharedService.setWidthDrawerState('250px');
      }else{
        this.sharedService.setWidthDrawerState('0px');
      }
    })

    this.detectarDispositivoMovil();
    const mediaQueryList = window.matchMedia('(max-width: 767px)'); // Puedes ajustar el valor según tus necesidades
    this.verificarEstado(mediaQueryList);
    mediaQueryList.addListener(this.verificarEstado.bind(this));
  }

  private verificarEstado(event: any) {
    this.isMobile = event.matches;
  }

  private detectarDispositivoMovil() {
    const userAgent = window.navigator.userAgent;
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  }

}
