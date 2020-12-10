import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaisComponent } from './pais/pais.component';
import { PipesModule } from '../pipes/pipes.module';
import { ContinenteComponent } from './continente/continente.component';
import { NavigationTemplateComponent } from './navigation-template/navigation-template.component';
import { ListCustomregionsComponent } from '../custom-region/list-custom-regions/list-customregions.component';
import { AddCustomRegionComponent } from '../custom-region/add-custom-region/add-custom-region.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, PaisComponent, ContinenteComponent, NavigationTemplateComponent, ListCustomregionsComponent, AddCustomRegionComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
  ],
  exports: [HomeComponent, PaisComponent, ContinenteComponent, NavigationTemplateComponent]
})
export class PagesModule { }
