import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from './domseguro.pipe';


@NgModule({
  declarations: [DomseguroPipe],
  exports: [
    DomseguroPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
