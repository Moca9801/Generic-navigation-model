import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-searcher',
  standalone: true,
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  imports: [CommonModule]
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
    "Item 1-1",
    "Item 1-2",
    "Item 1-3",
    "Item 1-4",
    "Item 1-5",
    "Item 2-1",
    "Item 2-2",
    "Item 2-3",
    "Item 3-1",
    "Item 3-2",
    "Item 4-1",
    "Item 5-1",
    "Item 5-2",
    "Permissions",
    "Roles"
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
    
    if(selectedValue === 'Item 1-1'){
      this.sharedService.activeSection = 'Section 1';
      this.router.navigate(['./dashboard/item-1-1']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 1-2'){
      this.sharedService.activeSection = 'Section 1';
      this.router.navigate(['./dashboard/item-1-2']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 1-3'){
      this.sharedService.activeSection = 'Section 1';
      this.router.navigate(['./dashboard/item-1-3']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 1-4'){
      this.sharedService.activeSection = 'Section 1';
      this.router.navigate(['./dashboard/item-1-4']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 1-5'){
      this.sharedService.activeSection = 'Section 1';
      this.router.navigate(['./dashboard/item-1-5']);
      this.sharedService.triggerRefresh();
    }
    else if(selectedValue === 'Item 2-1'){
      this.sharedService.activeSection = 'Section 2';
      this.router.navigate(['./dashboard/item-2-1']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 2-2'){
      this.sharedService.activeSection = 'Section 2';
      this.router.navigate(['./dashboard/item-2-2']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 2-3'){
      this.sharedService.activeSection = 'Section 2';
      this.router.navigate(['./dashboard/item-2-3']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 3-1'){
      this.sharedService.activeSection = 'Section 3';
      this.router.navigate(['./dashboard/item-3-1']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 3-2'){
      this.sharedService.activeSection = 'Section 3';
      this.router.navigate(['./dashboard/item-3-2']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 4-1'){
      this.sharedService.activeSection = 'Section 4';
      this.router.navigate(['./dashboard/item-4-1']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 5-1'){
      this.sharedService.activeSection = 'Section 5';
      this.router.navigate(['./dashboard/item-5-1']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Item 5-2'){
      this.sharedService.activeSection = 'Section 5';
      this.router.navigate(['./dashboard/item-5-2']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Permissions'){
      this.sharedService.activeSection = 'Admin';
      this.router.navigate(['./dashboard/superadmin-permissions']);
      this.sharedService.triggerRefresh();
    }else if(selectedValue === 'Roles'){
      this.sharedService.activeSection = 'Admin';
      this.router.navigate(['./dashboard/superadmin-users']);
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

