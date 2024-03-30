import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { EndPoint } from '../../constants/const';

const fetchAllOffers = createAsyncThunk<Offer[], undefined, {extra: AxiosInstance}>
('fetchOffers/all', async(_arg, {extra: api}) => {
  const response = await api.get<Offer[]>(EndPoint.Offers);
  return response.data;
});

export {fetchAllOffers};
