import {ChangeEvent, MouseEvent, useState} from 'react';
import FormRating from '../form-rating/form-rating';

function ReviewsForm() {
  const [formData, setFormData] = useState({review: '', rating: 0});

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      review: evt.target.value});
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: +evt.target.value
    });
  };

  const handleFormSubmit = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <FormRating onChange={handleRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={handleFormSubmit}
          disabled={formData.review.length < 50 || formData.review.length > 300 || formData.rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
