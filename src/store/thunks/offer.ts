import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullOffer } from '../../types/offer';
import { EndPoint } from '../../constants/const';

const fetchAllOffers = createAsyncThunk<FullOffer[], undefined, {extra: AxiosInstance}>
('fetchOffers/all', async(_arg, {extra: api}) => {
  const response = await api.get<FullOffer[]>(EndPoint.Offers);
  return response.data;
});

export {fetchAllOffers};
