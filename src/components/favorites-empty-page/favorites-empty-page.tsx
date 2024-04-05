import { memo } from 'react';

function FavoritesEmptyPage_(): JSX.Element {
  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">
        Save properties to narrow down search or plan your future trips.
      </p>
    </div>
  );
}

const FavoritesEmptyPage = memo(FavoritesEmptyPage_);

export default FavoritesEmptyPage;
