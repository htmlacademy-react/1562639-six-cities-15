import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../constants/const';
import { Review } from '../../types/review';
import { commentsThunk } from '../thunks/comments';
import { sortReviewDate } from '../../utils/function';

interface ReviewState {
  items: Review[];
  status: RequestStatus;
}

const initialState: ReviewState = {
  items: [],
  status: RequestStatus.Idle,
};

export const reviewSlice = createSlice({
  extraReducers(builder) {
    builder.addCase(commentsThunk.fetchComments.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(commentsThunk.fetchComments.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(commentsThunk.fetchComments.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(commentsThunk.postComment.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(commentsThunk.postComment.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(commentsThunk.postComment.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
  },
  initialState,
  name: 'reviews',
  reducers: {},
  selectors: {
    reviews: (state: ReviewState) => state.items,
    reviewStatus: (state: ReviewState) => state.status,
  },
});

export const reviewsSelectors = {
  ...reviewSlice.selectors,
  lastReview: createSelector(reviewSlice.selectors.reviews, (reviews) => reviews.toSorted(sortReviewDate))
};

export const reviewActions = {...reviewSlice.actions, ...commentsThunk};
