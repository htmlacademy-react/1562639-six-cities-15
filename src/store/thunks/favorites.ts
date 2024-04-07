import { EndPoint} from '../../constants/const';
import { createAppAsyncThunk } from '../../hooks/store';
import { FavoriteStatus } from '../../types/favorites';
import { Offer } from '../../types/offer';

const fetchFavorites = createAppAsyncThunk<Offer[], undefined>(
  'favorite/fetchAll',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(EndPoint.Favorite);
    return response.data;
  }
);

const changeFavorite = createAppAsyncThunk<Offer, FavoriteStatus>(
  'favorite/change',
  async ({ offerId, status }, { extra: api }) => {
    const response = await api.post<Offer>(
      (`${EndPoint.Favorite}/${offerId}/${Number(status)}`)
    );
    return response.data;
  }
);

export { fetchFavorites, changeFavorite };
