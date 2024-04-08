import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { FullOffer } from '../../types/offer';

import { RequestStatus } from '../../constants/const';
import { fetchAllOffers } from '../thunks/offer';
import { changeFavorite } from '../thunks/favorites';

interface OffersState {
  activeId?: FullOffer['id'];
  offers: FullOffer[];
  status: RequestStatus;
  hasError: boolean;
}

const initialState: OffersState = {
  offers: [],
  status: RequestStatus.Idle,
  hasError: false,
};

const offersSlice = createSlice({
  extraReducers(builder) {
    builder.addCase(fetchAllOffers.pending, (state) => {
      state.status = RequestStatus.Loading;
      state.hasError = false;
    });
    builder.addCase(fetchAllOffers.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.offers = action.payload;
    });
    builder.addCase(fetchAllOffers.rejected, (state) => {
      state.status = RequestStatus.Failed;
      state.hasError = true;
    });
    builder.addCase(changeFavorite.fulfilled, (state, action) => {
      const changedOffer = action.payload;
      const offerToChange = state.offers.find(
        (offer) => offer.id === changedOffer.id
      );
      if (offerToChange) {
        offerToChange.isFavorite = changedOffer.isFavorite;
      }
    });
  },
  initialState,
  name: 'offers',
  reducers: {
    setActiveId(state, action: PayloadAction<FullOffer['id'] | undefined>) {
      state.activeId = action.payload;
    },
  },
  selectors: {
    activeId: (state: OffersState) => state.activeId,
    offers: (state: OffersState) => state.offers,
    offersStatus: (state: OffersState) => state.status,
    getErrorStatus: (state: OffersState) => state.hasError,
  },
});

const offersActions = { ...offersSlice.actions, fetchAllOffers };
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSelectors, offersSlice };
