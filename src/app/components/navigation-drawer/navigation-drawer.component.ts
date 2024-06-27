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
  
    if(section === 'Section 1'){
      if(item === 'Item 1-1'){
        this.router.navigate(['./dashboard/item-1-1']);
      }else if(item === 'Item 1-2'){
        this.router.navigate(['./dashboard/item-1-2']);
      }else if(item === 'Item 1-3'){
        this.router.navigate(['./dashboard/item-1-3']);
      }else if(item === 'Item 1-4'){
        this.router.navigate(['./dashboard/item-1-4']);
      }else if(item === 'Item 1-5'){
        this.router.navigate(['./dashboard/item-1-5']);
      }
    }else if(section === 'Setion 2'){
      if(item === 'Item 2-1'){
        this.router.navigate(['./dashboard/item-2-1']);
      }else if(item === 'Item 2-2'){
        this.router.navigate(['./dashboard/item-2-2']);
      }
      else if(item === 'Item 2-3'){
        this.router.navigate(['./dashboard/item-2-3']);
      }
    }else if(section === 'Section 3'){
      if(item === 'Item 3-1'){
        this.router.navigate(['./dashboard/item-3-1']);
      }else if(item === 'Item 3-2'){
        this.router.navigate(['./dashboard/item-3-2']);
      }
    }else if(section === 'Section 4'){
      if(item === 'Item 4-1'){
        this.router.navigate(['./dashboard/item-4-1']);
      }
    } else if(section === 'Item 5'){
      if(item === 'Item 5-1'){
        this.router.navigate(['./dashboard/aitem-5-1'])
      }else if(item === 'Item 5-2'){
        this.router.navigate(['./dashboard/item-5-2'])
      }
    } else if(section === 'Admin'){
      if(item === 'Permissions'){
        this.router.navigate(['./dashboard/superadmin-permissions'])
      } else if(item === 'Roles'){
        this.router.navigate(['./dashboard/superadmin-users'])
      }
    }
  }

  salirPantalla(){
    this.router.navigate(['']);
    this.sharedService.bandera = !this.sharedService.bandera;
  }

}
