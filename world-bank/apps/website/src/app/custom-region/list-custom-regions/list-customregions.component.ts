import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomRegion } from '../customregion.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-list-custom-regions',
  templateUrl: './list-custom-regions.component.html',
  styleUrls: []
})
export class ListCustomregionsComponent implements OnInit {

  customRegions: Observable<CustomRegion[]>;
  constructor(private store: Store<AppState>) {
    this.customRegions = this.store.select('customRegions');
  }

  ngOnInit() {
  }

}
