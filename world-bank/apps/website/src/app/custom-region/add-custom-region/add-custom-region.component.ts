
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CustomregionActions from './../../store/customregion.actions';

@Component({
  selector: 'app-add-custom-region',
  templateUrl: './add-custom-region.component.html',
  styleUrls: []
})
export class AddCustomRegionComponent implements OnInit {
  regionName: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addCustomRegion(name) {
    this.store.dispatch(new CustomregionActions.AddCustomRegion({name}) );
    this.regionName = '';
  }

}
