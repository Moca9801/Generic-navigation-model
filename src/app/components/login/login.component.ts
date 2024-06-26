import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { SharedService } from 'src/app/services/shared.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  standalone: true,
  imports:[CommonModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  login_acces: string;
  @Input() bandera:any;

  constructor(public sharedService: SharedService,public modalRef: MdbModalRef<LoginComponent>, private crudService: CrudService ){
    this.username = '';
    this.password = "";
    this.login_acces = "";
  }

  ngOnInit(): void {
    this.login_acces = "";
  
  }

  async login(){
    try{      
      const return_login = await this.crudService.get(`api/v1/auth/login/?username=${this.username}&password=${this.password}`);        
      this.modalRef.close();
      this.sharedService.bandera = !this.sharedService.bandera;
      this.login_acces = "true";
      console.log(return_login.body)
      this.setCookie('TOKEN', return_login.body.data[0].token);
    }catch{
      this.login_acces = "false";
    }
  }

  private setCookie(name: string, value: string) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (365 * 24 * 60 * 60 * 1000)); // Caduca en 365 días

    const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieString;
  }

}
