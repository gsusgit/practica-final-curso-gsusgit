import { Component, OnInit } from '@angular/core';
import { WorldBankService } from '@world-bank/shared/data';
import { Continente } from '../../../../../../libs/shared/models/continente/src/lib/continente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'wb-website-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  continentes:Continente[] = [];

  ngOnInit(): void {
  }

  constructor(private wbs: WorldBankService, private router: Router) {
    this.wbs.obtenerRegionesContinentales$()
    .subscribe(resp => {
      this.continentes = resp;
    });
  }

  verRegion(id: string) {
    this.router.navigate(['/region', id]);
  }

  infoRegion(codigo:string) {
    this.wbs.obtenerInfoRegion$(codigo)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  infoPais(codigo:string) {
    this.wbs.obtenerInfoPais$(codigo)
    .subscribe(resp => {
      console.log(resp);
    });
  }

}
