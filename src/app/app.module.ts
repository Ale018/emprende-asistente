import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { EmprendeComponent } from './components/emprende/emprende.component';
import { LateralAsistenteComponent } from './components/lateral-asistente/lateral-asistente.component';
import { AsistenteAsistenciaComponent } from './components/asistente-asistencia/asistente-asistencia.component';
import { AsistenteInscripcionComponent } from './components/asistente-inscripcion/asistente-inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ParticipantesComponent,
    AsistentesComponent,
    LoginComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    LateralComponent,
    EmprendeComponent,
    LateralAsistenteComponent,
    AsistenteAsistenciaComponent,
    AsistenteInscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
