import type { CityName } from '../constants/const';
import type { FullOffer } from '../types/offer';

import { CITIES } from '../constants/const';
import { offers } from '../mock/offers';

type OffersState = {
  city: CityName;
  offers: FullOffer[];
}

const initialState: OffersState = {
  city: CITIES[0].name,
  offers,
};

const enum ActionType {
  SetCity = 'offers/setCity',
}

const setCity = (city: CityName) => ({
  payload: city,
  type: ActionType.SetCity,
});

function reducer(state: OffersState = initialState, action: {payload: unknown; type: ActionType}):
OffersState {
  switch (action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload as CityName,
      };
    default:
      return state;
  }
}

export {reducer, setCity};
