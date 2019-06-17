import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { MedicoFormComponent } from './componentes/medico-form/medico-form.component';

import {MedicoService} from './servicios/medico.service';
import { from } from 'rxjs';
import { BuscarmedicosComponent } from './componentes/buscarmedicos/buscarmedicos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    MedicoFormComponent,
    BuscarmedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
