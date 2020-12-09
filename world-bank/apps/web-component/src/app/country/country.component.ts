import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '@world-bank/pais';
import { WorldBankService } from '../../../../../libs/shared/data/src/lib/world-bank-service/world-bank-service';

@Component({
  selector: 'world-bank-country',
  templateUrl: './country.component.html',
  styleUrls: []
})
export class CountryComponent {

  @Input() code;
  @Output() id = new EventEmitter<string>();

  public pais: Pais;
  public loading = false;
  public error = false;
  public success = false;

  constructor(private wbs: WorldBankService) { }

  infoCountry(): void {
    this.loading = true;
    this.success = false;
    this.error = false;
    setTimeout(() => {
      this.wbs.obtenerInfoPais$(this.code).subscribe(resp => {
        this.id.next(this.code);
        this.loading = false;
        if (resp === undefined) {
            this.error = true;
            this.success = false;
        } else {
            this.pais = resp[0];
            this.success = true;
        }
      });
    }, 1000);
  }

}
