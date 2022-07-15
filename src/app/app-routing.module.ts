import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

const routes: Routes = [
  {path:'proyecto',component:ProyectoComponent},
  {path:'expericia',component:ExperienciaComponent},
  {path:'educacion',component:EducacionComponent},
  {path:'hys',component:HysComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
