import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { fetchFavorites, changeFavorite } from '../thunks/favorites';
import { RequestStatus } from '../../constants/const';

type InitialState = {
  favorites: Offer[];
  status: RequestStatus;
}

const initialState: InitialState = {
  favorites: [],
  status: RequestStatus.Idle
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  selectors: {
    favorites: (state) => state.favorites,
    favoritesLength: (state) => state.favorites.length,
    status: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(changeFavorite.fulfilled, (state, action) => {
      const changedOffer = action.payload;
      if (changedOffer.isFavorite) {
        state.favorites.push(action.payload);
      } else {
        const index = state.favorites.findIndex((offer) => offer.id === changedOffer.id);
        state.favorites.splice(index, 1);
      }
    });
  },
});

const favoritesActions = {...favoritesSlice.actions, fetchFavorites, changeFavorite};
const favoritesSelectors = favoritesSlice.selectors;

export { favoritesActions, favoritesSelectors, favoritesSlice };
