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
  cargando = true;
  imagenes = {
    1: '../../../assets/1.jpg',
    2: '../../../assets/2.jpg',
    3: '../../../assets/3.jpg',
    4: '../../../assets/4.jpg',
    6: '../../../assets/6.jpg',
    8: '../../../assets/8.jpg',
    9: '../../../assets/9.jpg'
  };

  ngOnInit(): void {
  }

  constructor(private wbs: WorldBankService, private router: Router) {
    this.wbs.obtenerRegionesContinentales$()
    .subscribe(resp => {
      this.continentes = resp;
      setTimeout(() => {
        this.cargando = false;
      }, 1500);
    });
  }

  verRegion(id: string) {
    this.router.navigate(['/region', id]);
  }

}
