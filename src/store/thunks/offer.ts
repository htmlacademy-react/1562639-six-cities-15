import { FullOffer, Offer } from '../../types/offer';
import { EndPoint } from '../../constants/const';
import { createAppAsyncThunk } from '../../hooks/store';

const fetchAllOffers = createAppAsyncThunk<FullOffer[], undefined>
('fetchOffers/all', async(_arg, {extra: api}) => {
  const response = await api.get<FullOffer[]>(EndPoint.Offers);
  return response.data;
});

const fetchOffer = createAppAsyncThunk<FullOffer, string>('fetchOffers/one', async (offerId, {extra: api}) => {
  const response = await api.get<FullOffer>(`${EndPoint.Offers}/${offerId}`);
  return response.data;
});

const fetchNearBy = createAppAsyncThunk<Offer[], string>('fetchOffers/near', async (offerId, {extra: api}) => {
  const response = await api.get<Offer[]>(`${EndPoint.Offers}/${offerId}/nearby`);
  return response.data;
});

export {fetchAllOffers, fetchOffer, fetchNearBy};
