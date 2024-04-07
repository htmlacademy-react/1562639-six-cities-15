import type { ReactNode } from 'react';
import type { Location } from 'react-router-dom';

import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user';
import { Loader } from '../loader/loader';

type TProtectedRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

type FromState = {
  from?: Location;
};

export default function ProtectedRoute({ children, onlyUnAuth}: TProtectedRouteProps) {
  const location: Location<FromState> = useLocation() as Location<FromState>;

  const status = useAppSelector(userSelectors.userStatus);

  if (status === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  if (onlyUnAuth && status === AuthorizationStatus.Auth) {
    //Если есть авторизация и страница логина
    const from = location.state?.from || {pathname: AppRoute.Root};
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && status === AuthorizationStatus.NoAuth) {
    //Если нет авторизации и не страница логина
    return <Navigate state={{from: location}} to={AppRoute.Login} />;
  }

  return children; //Все хорошо и рендерим компонент
}
