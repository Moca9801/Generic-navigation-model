import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPermissionsComponent } from './pages/admin-permissions/admin-permissions.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { Item11Component } from './pages/item1-1/item1-1.component';
import { Item12Component } from './pages/item1-2/item1-2.component';
import { Item13Component } from './pages/item1-3/item1-3.component';
import { Item14Component } from './pages/item1-4/item1-4.component';
import { Item15Component } from './pages/item1-5/item1-5.component';
import { Item21Component } from './pages/item2-1/item2-1.component';
import { Item22Component } from './pages/item2-2/item2-2.component';
import { Item23Component } from './pages/item2-3/item2-3.component';
import { Item31Component } from './pages/item3-1/item3-1.component';
import { Item32Component } from './pages/item3-2/item3-2.component';
import { Item41Component } from './pages/item4-1/item4-1.component';
import { Item51Component } from './pages/item5-1/item5-1.component';
import { Item52Component } from './pages/item5-2/item5-2.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
        { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'item-1-1', component: Item11Component},
      {path: 'item-1-2', component: Item12Component},
      {path: 'item-1-3', component: Item13Component},
      {path: 'item-1-4', component: Item14Component},
      {path: 'item-1-5', component: Item15Component},
      {path: 'item-2-1', component: Item21Component},
      {path: 'item-2-2', component: Item22Component},
      {path: 'item-2-3', component: Item23Component},
      {path: 'item-3-1', component: Item31Component},
      {path: 'item-3-2', component: Item32Component},
      {path: 'item-4-1', component: Item41Component},
      {path: 'item-5-1', component: Item51Component},
      {path: 'item-5-2', component: Item52Component},
      {path: 'superadmin-permissions', component: AdminPermissionsComponent},
      {path: 'superadmin-users', component: AdminUsersComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
