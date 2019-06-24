import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MedicoFormComponent} from './componentes/medico-form/medico-form.component';
import {BuscarmedicosComponent} from './componentes/buscarmedicos/buscarmedicos.component';

const routes: Routes = [

  {
    path: "medico/agregar",
    component: MedicoFormComponent
  },
  {
    path :"buscar/medicos/:id",
    component: BuscarmedicosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
