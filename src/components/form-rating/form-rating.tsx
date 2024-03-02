import { ChangeEvent, Fragment } from 'react';

const VALUES = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

type FormRatingProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function FormRating({onChange}: FormRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {VALUES.map(({value, title}) => (
        <Fragment key={value}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={`${value}-stars`}
            type="radio"
            onChange={onChange}
          />
          <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default FormRating;
