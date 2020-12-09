import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [CountryComponent],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(CountryComponent, {injector});
    customElements.define('wbde-country', webComponent);
  }

  ngDoBootstrap() {}
}
