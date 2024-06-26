import { Component, OnInit} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit{
  modalRef: MdbModalRef<LoginComponent> | null = null;
  config = {
    animation: true,
    backdrop: true,
    containerClass: 'lucas',
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-dialog',
    nonInvasive: false,
  }

  constructor(private modalService: MdbModalService){
  }

  ngOnInit(): void {
  }

  ingresaClick(){
    this.modalRef = this.modalService.open(LoginComponent, this.config);
   
  }

}
