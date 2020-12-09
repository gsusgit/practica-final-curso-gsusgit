import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorldBankService } from '@world-bank/shared/data';
import { Continente } from '@world-bank/continente';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'wb-website-home',
  templateUrl: './home.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public language = '';
  public regions$ = this.wbs.obtenerRegionesContinentales$(this.language);
  continentes:Continente[] = [];

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
    if (this.url.path().includes('/es/')) {
      this.language = '/es/';
    }
  }

  constructor(private wbs: WorldBankService, private router: Router, private url:LocationStrategy) { }

  verRegion(id: string) {
    this.router.navigate(['/continente', id]);
  }

}
