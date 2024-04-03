import { EndPoint } from '../../constants/const';
import { createAppAsyncThunk } from '../../hooks/store';
import { FullOffer } from '../../types/offer';
import { Review } from '../../types/review';

const fetchComments = createAppAsyncThunk<Review[], FullOffer['id']>(
  'comments/fetch',
  async (offerId, { extra: api }) => {
    const response = await api.get<Review[]>(`${EndPoint.Comments}/${offerId}`);
    return response.data;
  }
);

interface PostCommentProps {
  body: {
    comment: string;
    rating: number;
  };
  offerId: FullOffer['id'];
}

const postComment = createAppAsyncThunk<Review, PostCommentProps>(
  'comments/post',
  async ({ body, offerId }, { extra: api }) => {
    const response = await api.post<Review>(
      `${EndPoint.Comments}/${offerId}`,
      body
    );
    return response.data;
  }
);

export const commentsThunk = { fetchComments, postComment };
