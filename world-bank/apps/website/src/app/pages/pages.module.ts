import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegionComponent } from './region/region.component';
import { PaisComponent } from './pais/pais.component';

@NgModule({
  declarations: [HomeComponent, RegionComponent, PaisComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, RegionComponent, PaisComponent]
})
export class PagesModule { }
