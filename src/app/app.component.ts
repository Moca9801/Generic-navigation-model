import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TemplateBoletin';
  widthDrawer: any;
  isMobile: boolean = false;
  helper: boolean = false;

  @HostListener('document:click', ['$event'])
  documentClickHandler(event: MouseEvent) {
    const navDrawer = document.getElementById('navDrawer');
    if (this.isMobile == true && this.sharedService.showDrawer == true && navDrawer && !navDrawer.contains(event.target as Node)) {
      if(this.sharedService.showDrawerForSmallDevices){
        this.sharedService.setShowDrawerState(true);        
        this.sharedService.setShowDrawerStateForSmallDevices(false);       

      }else{
        this.sharedService.setShowDrawerState(false); 
        // Aquí puedes realizar las acciones deseadas
      }
      // El clic ocurrió fuera de app-navigation-drawer
      //this.sharedService.setShowDrawerState(false);        // Aquí puedes realizar las acciones deseadas
    }
  }
 
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.showDrawerState$.subscribe(event=>{
      if(event === true){
        this.widthDrawer = '250px'
      }else{
        this.widthDrawer = '0px'
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
