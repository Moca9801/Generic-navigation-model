import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

interface NewUser {
  username: string;
  email: string;
  password: string;
  role: string;
  court_code: string;
  court_username: string;
  court_password: string;
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit{
  
  tableHeaders = ['USERNAME', 'EMAIL', 'ROLE', 'DB', 'DB-USER', 'DB-PASS', 'ACTIONS'];
  tableData: NewUser[] = [ 
    { username: 'aimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'bimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'cimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'dimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'eimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'fimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'aimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'aimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'aimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },
    { username: 'aimc9801', email: 'example@gmail.com', password: '89hjwdmiomadms', role: 'superadmin', court_code: 'X2E', court_username: 'SD', court_password: 'ñlamsa7ismd.', },

  ]
  filteredData: any = [];

  newUser: NewUser = {
    username: '',
    email: '',
    password: '',
    role: '',
    court_code: '',
    court_username: '',
    court_password: '',
  };

  userToUpdate: NewUser = {
    username: '',
    email: '',
    password: '',
    role: '',
    court_code: '',
    court_username: '',
    court_password: '',
  };

  users: NewUser[] = [];

  deletionUser= "";
  updateUser: NewUser[] = [];


  constructor(private crudService: CrudService){
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  async getAllUsers(){
    let data = await this.crudService.get("api/v1/users/");
    this.tableData = data.body.data;
    this.filteredData = this.tableData;
    return data.body.data;
  }

  combinedFilter(event: Event): void {
    const userInputElement = document.getElementById('userInput') as HTMLInputElement;
    const courtCodeInputElement = document.getElementById('courtCodeInput') as HTMLInputElement;
  
    const userFilterValue = userInputElement.value.trim().toLowerCase();
    const courtCodeFilterValue = courtCodeInputElement.value.trim().toLowerCase();
  
    if (!userFilterValue && !courtCodeFilterValue) {
      this.filteredData = [...this.tableData]; // Si no hay valor de filtro, muestra todos los datos
    } else {
      this.filteredData = this.tableData.filter((row) =>
        (userFilterValue ? row.username.toLowerCase().includes(userFilterValue) : true) &&
        (courtCodeFilterValue ? row.court_code.toLowerCase().includes(courtCodeFilterValue) : true)
      );
    }
  }
  

  

  isSaveButtonDisabled(): boolean {
    return (
      !this.newUser.username ||
      !this.newUser.email ||
      !this.newUser.password ||
      !this.newUser.role ||
      !this.newUser.court_code ||
      !this.newUser.court_username ||
      !this.newUser.court_password
    );
    
  }

  async createUser(){
    try{
      const params : {} = {
        "url": "api/v1/users/",
        "body": this.newUser
      }
      await this.crudService.post( params );
      this.getAllUsers();
      //
    }catch(error){
    }
  }

  getUserToDelete(user: any){
    this.deletionUser = user.username;
  }

  async deleteUser(){
    await this.crudService.delete(`api/v1/users/{ "username": "${this.deletionUser}"  }`);
    this.getAllUsers();
    this.deletionUser = "";
  }

  
  getUserToUpdate(user: NewUser){
    this.userToUpdate = user;
  }

  async UpdateUser(){
    try{
      const params : {} = {
        "url": "api/v1/users/",
        "body": this.userToUpdate
      }
      const returnData = await this.crudService.put(params);
      this.getAllUsers();
    }catch(error){
    }
  }
}
