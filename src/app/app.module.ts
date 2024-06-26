import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { HttpClientModule } from '@angular/common/http';

import { CuadranteGenerarComponent } from './pages/cuadrante-generar/cuadrante-generar.component';
import { ModificacionExpComponent } from './pages/modificacion-exp/modificacion-exp.component';
import { RouterModule } from '@angular/router';
import { CuadranteRegistrarFechaComponent } from './pages/cuadrante-registrar-fecha/cuadrante-registrar-fecha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationDrawerComponent } from './components/navigation-drawer/navigation-drawer.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { CuadrantePartesComponent } from './pages/cuadrante-partes/cuadrante-partes.component';
import { ConsultasCuadranteComponent } from './pages/consultas-cuadrante/consultas-cuadrante.component';
import { ConsultasExpedientesComponent } from './pages/consultas-expedientes/consultas-expedientes.component';
import { ConsultasFeDeErratasComponent } from './pages/consultas-fe-de-erratas/consultas-fe-de-erratas.component';
import { UsuariosNuevoComponent } from './pages/usuarios-nuevo/usuarios-nuevo.component';
import { UsuariosEliminarComponent } from './pages/usuarios-eliminar/usuarios-eliminar.component';
import { ArchivoGeneralCapturaComponent } from './pages/archivo-general-captura/archivo-general-captura.component';
import { ArchivoGeneralLimpiarListaComponent } from './pages/archivo-general-limpiar-lista/archivo-general-limpiar-lista.component';
import { DatosDelJuzgadoInformacionComponent } from './pages/datos-del-juzgado-informacion/datos-del-juzgado-informacion.component';
import { CatalogosTipoJuicioComponent } from './pages/catalogos-tipo-juicio/catalogos-tipo-juicio.component';
import { CuadranteRegistrarExpedienteComponent } from './pages/cuadrante-registrar-expediente/cuadrante-registrar-expediente.component';
import { MainComponent } from './components/main/main.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { AdminPermissionsComponent } from './pages/admin-permissions/admin-permissions.component';
import { AdminUsersModule } from './pages/admin-users/admin-users.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearcherComponent,
    ArchivoGeneralCapturaComponent,
    DatosDelJuzgadoInformacionComponent,
    CuadranteRegistrarExpedienteComponent,
    MainComponent,
    DashboardFooterComponent,
    AdminPermissionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    MdbModalModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CuadranteRegistrarFechaComponent,
    NavigationDrawerComponent,
    CuadranteGenerarComponent,
    ModificacionExpComponent,
    CuadrantePartesComponent,
    ConsultasCuadranteComponent,
    ConsultasExpedientesComponent,
    ConsultasFeDeErratasComponent,
    UsuariosNuevoComponent,
    UsuariosEliminarComponent,
    ArchivoGeneralLimpiarListaComponent,
    CatalogosTipoJuicioComponent,
    AdminUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
