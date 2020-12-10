import { CustomRegion } from '../custom-region/customregion.model';
import * as CustomRegionActions from './customregion.actions';

export function customRegionsReducer(state: CustomRegion[] = [], action: CustomRegionActions.Actions) {
  switch (action.type) {
    case CustomRegionActions.ADD_CUSTOM_REGION:
      return [...state, action.payload];
    default:
      return state;
  }
}
