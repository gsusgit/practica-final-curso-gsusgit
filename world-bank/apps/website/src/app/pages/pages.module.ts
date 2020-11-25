import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaisComponent } from './pais/pais.component';
import { PipesModule } from '../pipes/pipes.module';
import { ContinenteComponent } from './continente/continente.component';

@NgModule({
  declarations: [HomeComponent, PaisComponent, ContinenteComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [HomeComponent, PaisComponent, ContinenteComponent]
})
export class PagesModule { }
