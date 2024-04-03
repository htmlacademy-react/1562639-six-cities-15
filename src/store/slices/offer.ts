import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants/const';
import { FullOffer, Offer } from '../../types/offer';
import { fetchNearBy, fetchOffer } from '../thunks/offer';

interface OfferState {
  info: FullOffer | null;
  nearby: Offer[];
  status: RequestStatus;
}

const initialState: OfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle
};

export const OfferSlice = createSlice({
  extraReducers(builder) {
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      state.info = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(fetchOffer.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(fetchOffer.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchNearBy.fulfilled, (state, action) => {
      state.nearby = action.payload;
    });
  },
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
    }
  },
  selectors: {
    nearbyOffers: (state: OfferState) => state.nearby,
    offer: (state: OfferState) => state.info,
    offerStatus: (state: OfferState) => state.status
  }
});

export const offerActions = {...OfferSlice.actions, fetchNearBy, fetchOffer};
export const offerSelector = OfferSlice.selectors;
