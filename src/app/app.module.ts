import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationDrawerComponent } from './components/navigation-drawer/navigation-drawer.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MainComponent } from './components/main/main.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { AdminPermissionsComponent } from './pages/admin-permissions/admin-permissions.component';
import { AdminUsersModule } from './pages/admin-users/admin-users.module';
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

@NgModule({
  declarations: [
    AppComponent,
    AdminPermissionsComponent,
    Item11Component,
    Item12Component,
    Item13Component,
    Item14Component,
    Item15Component,
    Item21Component,
    Item22Component,
    Item23Component,
    Item31Component,
    Item32Component,
    Item41Component,
    Item51Component,
    Item52Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    MdbModalModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NavigationDrawerComponent,
    AdminUsersModule,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    DashboardComponent,
    SearcherComponent,
    DashboardFooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
