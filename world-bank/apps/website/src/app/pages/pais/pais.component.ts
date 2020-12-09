import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldBankService } from '@world-bank/shared/data';
import { Pais } from '@world-bank/pais';

@Component({
  selector: 'wb-website-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent implements OnInit {

  pais:Pais;
  mapSrc:string;
  cargando = true;

  constructor(private activatedRoute: ActivatedRoute, private wbs: WorldBankService, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.wbs.obtenerInfoPais$(params.id).subscribe(resp => {
        this.pais = resp[0];
        this.mapSrc = `https://maps.google.com/maps?q=${this.pais.latitude},${this.pais.longitude}&z=4&output=embed`;
        setTimeout(() => {
          this.cargando = false;
        }, 1500);
      });
    });
  }

  navegarARegion(id:string) {
    this.router.navigate(['/continente', id]);
  }

}
