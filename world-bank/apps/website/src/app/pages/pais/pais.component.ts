import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldBankService } from '@world-bank/shared/data';
import { Pais } from '../../../../../../libs/shared/models/continente/src/lib/pais.model';

@Component({
  selector: 'wb-website-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent implements OnInit {

  pais:Pais;

  constructor(private activatedRoute: ActivatedRoute, private wbs: WorldBankService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.wbs.obtenerInfoPais$(params.id).subscribe(resp => {
        this.pais = resp[0];
      });
    });
  }

}
