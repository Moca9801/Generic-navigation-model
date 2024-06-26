// admin-users.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { AdminUsersComponent } from './admin-users.component';

@NgModule({
  declarations: [AdminUsersComponent],
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  exports: [AdminUsersComponent],
})
export class AdminUsersModule {}
