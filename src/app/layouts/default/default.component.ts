import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { CrudService } from 'src/app/services/crud.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-default',
  standalone: true,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  imports:[CommonModule, HeaderComponent, LoginComponent, FooterComponent, MainComponent,FormsModule]
})
export class DefaultComponent implements OnInit{
  username: string = '';
  password: string = '';
  login_acces: string = '';
  bandera1: boolean = false;
  bandera2: boolean = false;


  constructor(public sharedService: SharedService, private crudService: CrudService ){
  }

  ngOnInit(): void {
    
  }

  async login(){
    try{      
      this.sharedService.bandera = !this.sharedService.bandera;
    }catch{
      this.login_acces = "false";
    }
  }

  detectchange(){
    if(this.username.length === 0){
      this.bandera1 = true;
    }else{
      this.bandera2 = false;
    }

    if(this.password.length === 0){
      this.bandera2 = true;
    }else{
      this.bandera2 = false;
    }
  }
}
