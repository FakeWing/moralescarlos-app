import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculasComponent } from './componentes/matriculas/matriculas.component';
import { TalleresComponent } from './componentes/talleres/talleres.component';


const routes: Routes = [
  {path:"", redirectTo:"menu", pathMatch:"full"},
  {path:"talleres", component:TalleresComponent},
  {path:"matriculas", component:MatriculasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
