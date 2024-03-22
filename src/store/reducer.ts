import type { CityName } from '../constants/const';
import type { FullOffer } from '../types/offer';

import { CITIES } from '../constants/const';
import { offers } from '../mock/offers';
import { createAction, createReducer } from '@reduxjs/toolkit';

type OffersState = {
  city: CityName;
  offers: FullOffer[];
};

const initialState: OffersState = {
  city: CITIES[0].name,
  offers,
};

const setCity = createAction<CityName>('offers/setCity');

const reducer = createReducer(initialState,
  (builder) => {
    builder.addCase(setCity, (state, action) => {
      state.city = action.payload;
    });
  });

export { reducer, setCity };
