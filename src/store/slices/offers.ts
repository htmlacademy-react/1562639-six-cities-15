import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CITIES, CityName } from '../../constants/const';
import { offers } from '../../mock/offers';
import { FullOffer } from '../../types/offer';

interface OffersState {
  city: CityName;
  offers: FullOffer[];
}

const initialState: OffersState = {
  city: CITIES[0].name,
  offers,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
  selectors: {
    city: (state: OffersState) => state.city,
    offers: (state: OffersState) => state.offers,
  }
});

const offersAction = offersSlice.actions;
const offersSelecrors = offersSlice.selectors;

export {offersAction, offersSelecrors, offersSlice};
