import { Action } from '@ngrx/store';
import { CustomRegion } from '../custom-region/customregion.model';

export const ADD_CUSTOM_REGION = 'Add custom region';

export class AddCustomRegion implements Action {
  readonly type = ADD_CUSTOM_REGION;
  constructor(public payload: CustomRegion) { }
}

export type Actions = AddCustomRegion;
