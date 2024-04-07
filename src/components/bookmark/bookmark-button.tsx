import classNames from 'classnames';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import { favoritesActions } from '../../store/slices/favorites';
import { useState } from 'react';
import { FavoriteStatus } from '../../types/favorites';
import { userSelectors } from '../../store/slices/user';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/const';

interface BookmarkButtonProps {
  classStart?: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerId: string;
  width?: number;
  height?: number;
}

export function BookmarkButton({
  classStart = 'place-card',
  isFavorite,
  offerId,
  width = 18,
  height = 19
}: BookmarkButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState(isFavorite);
  const authorizationStatus = useAppSelector(userSelectors.userStatus);
  const {changeFavorite} = useActionCreators(favoritesActions);
  const navigate = useNavigate();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  function handleClick() {
    if (!isAuthorized) {
      return navigate(AppRoute.Login);
    }
    setIsActive((prev) => !prev);
    const favoriteStatus: FavoriteStatus = {offerId, status: !isActive};
    changeFavorite(favoriteStatus);
  }

  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${classStart}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    {
      [`${buttonClass}--active`]: isActive,
    },
    'button'
  );

  return (
    <button className={favoriteClass} onClick={handleClick} type="button">
      <svg
        className={`${classStart}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}
