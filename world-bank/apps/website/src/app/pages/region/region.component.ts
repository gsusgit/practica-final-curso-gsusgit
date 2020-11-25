import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldBankService } from '@world-bank/shared/data';
import { Region } from '../../../../../../libs/shared/models/continente/src/lib/region.model';

@Component({
  selector: 'wb-website-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent implements OnInit {

  region:Region[] = [];
  paises = [];
  cargando = true;

  constructor(private activatedRoute: ActivatedRoute, private wbs: WorldBankService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.wbs.obtenerInfoRegion$(params.id).subscribe(resp => {
        console.log(resp);
        this.region = resp;
        for (let i = 0; i < this.region.length; i++) {
          const pais = this.region[i];
          this.paises.push(pais);
          setTimeout(() => {
            this.cargando = false;
          }, 1500);
        }
      });
    });
  }

  verPais(id: string) {
    this.router.navigate(['/pais', id]);
  }

}
