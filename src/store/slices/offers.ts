import { createSlice } from '@reduxjs/toolkit';

import type { FullOffer } from '../../types/offer';

import { offers } from '../../mock/offers';


interface OffersState {
  offers: FullOffer[];
}

const initialState: OffersState = {
  offers,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {},
  selectors: {
    offers: (state: OffersState) => state.offers,
  },
});

const offersAction = offersSlice.actions;
const offersSelecrors = offersSlice.selectors;

export { offersAction, offersSelecrors, offersSlice };
