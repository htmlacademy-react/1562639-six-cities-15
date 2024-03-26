import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { FullOffer } from '../../types/offer';

import { offers } from '../../mock/offers';


interface OffersState {
  activeId?: FullOffer['id'];
  offers: FullOffer[];
}

const initialState: OffersState = {
  offers,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setActiveId(state, action: PayloadAction<FullOffer['id'] | undefined>) {
      state.activeId = action.payload;
    }
  },
  selectors: {
    activeId: (state: OffersState) => state.activeId,
    offers: (state: OffersState) => state.offers,
  },
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSelectors, offersSlice };
