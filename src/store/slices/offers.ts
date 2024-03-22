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
});

const offersAction = offersSlice.actions;

export {offersAction, offersSlice};
