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
        console.log(resp);
        this.continente = resp;
        for (let i = 0; i < this.continente.length; i++) {
          const pais = this.continente[i];
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
