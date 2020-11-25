import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinenteComponent } from './pages/continente/continente.component';
import { HomeComponent } from './pages/home/home.component';
import { PaisComponent } from './pages/pais/pais.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'continente/:id', component: ContinenteComponent},
  {path: 'pais/:id', component: PaisComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
