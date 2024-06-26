import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadranteGenerarComponent } from './pages/cuadrante-generar/cuadrante-generar.component';
import { ModificacionExpComponent } from './pages/modificacion-exp/modificacion-exp.component';
import { CuadranteRegistrarFechaComponent } from './pages/cuadrante-registrar-fecha/cuadrante-registrar-fecha.component';
import { CuadranteReporteComponent } from './pages/cuadrante-reporte/cuadrante-reporte.component';
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
import { AdminPermissionsComponent } from './pages/admin-permissions/admin-permissions.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

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
      {path:'cuadrante-registrar-expediente',component:CuadranteRegistrarExpedienteComponent},
      {path:'cuadrante-generar',component:CuadranteGenerarComponent},
      {path:'cuadrante-modificacion-exp',component:ModificacionExpComponent},
      {path:'cuadrante-report',component:CuadranteReporteComponent},
      {path: 'cuadrante-registrar-fecha', component:CuadranteRegistrarFechaComponent},
      {path: 'cuadrante-partes', component:CuadrantePartesComponent},
      {path: 'consultas-cuadrante', component: ConsultasCuadranteComponent},  
      {path: 'consultas-expedientes', component: ConsultasExpedientesComponent},
      {path: 'consultas-fe-de-erratas', component: ConsultasFeDeErratasComponent},
      {path: 'usuarios-nuevo', component: UsuariosNuevoComponent},
      {path: 'usuarios-eliminar', component: UsuariosEliminarComponent},
      {path: 'archivoGeneral-captura', component: ArchivoGeneralCapturaComponent},
      {path: 'archivoGeneral-limpiar-lista', component: ArchivoGeneralLimpiarListaComponent},
      {path: 'archivoGeneral-exportar', component: DatosDelJuzgadoInformacionComponent},
      {path: 'catalogos-tipo-de-juicio', component: CatalogosTipoJuicioComponent},
      {path: 'datos-del-juzgado-informacion', component: DatosDelJuzgadoInformacionComponent},
      {path: 'superadmin-permissions', component: AdminPermissionsComponent},
      {path: 'superadmin-users', component: AdminUsersComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
