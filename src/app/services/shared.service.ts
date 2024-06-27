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
      section: 'Section 1',
      items: [
        'Item 1-1',
        'Item 1-2',
        'Item 1-3',
        'Item 1-4',
        'Item 1-5',
      ]
    },
    {
      section: 'Section 2',
      items: [
        'Item 2-1',
        'Item 2-2',
        'Item 2-3'
      ]
    },
    {
      section: 'Section 3',
      items: [
        'Item 3-1',
        'Item 3-2',
      ]
    },
    {
      section: 'Section 4',
      items: [
        'Item 4-1'
      ]
    },
    {
      section: 'Section 5',
      items: [
        'Item 5-1',
        'Item 5-2'
      ]
    },
    {
      section: 'Admin',
      items: [
        'Permissions',
        'Roles',
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