import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldBankService } from '@world-bank/shared/data';
import { Continente } from '@world-bank/continente';

@Component({
  selector: 'wb-website-continente',
  templateUrl: './continente.component.html',
  styles: [
  ]
})
export class ContinenteComponent implements OnInit {

  continente:Continente[] = [];
  paises = [];
  cargando = true;

  constructor(private activatedRoute: ActivatedRoute, private wbs: WorldBankService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.wbs.obtenerInfoRegion$(params.id).subscribe(resp => {
        this.continente = resp;
        for (let i = 0; i < this.continente.length; i++) {
          const pais = this.continente[i];
          this.paises.push(pais);
        }
        this.paises.sort(this.ordenarPaises);
        setTimeout(() => {
          this.cargando = false;
        }, 1500);
      });
    });
  }

  ordenarPaises(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  verPais(id: string) {
    this.router.navigate(['/pais', id]);
  }

}
