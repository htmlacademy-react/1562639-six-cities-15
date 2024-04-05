import { useAppDispatch } from '../../hooks/store';
import { fetchAllOffers } from '../../store/thunks/offer';
import './style.css';

function ErrorPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className='error'>
      <p className="error__text">Failed to load data</p>
      <button
        onClick={() => {
          dispatch(fetchAllOffers());
        }}
        className="replay replay--error"
        type="button"
      >
        To try one more time
      </button>
    </div>
  );
}

export default ErrorPage;
