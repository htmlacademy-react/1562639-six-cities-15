import type { ReactNode } from 'react';
import type { Location } from 'react-router-dom';

import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../constants/const';
import { useAppSelector } from '../../hooks/store';
import { userSelectors } from '../../store/slices/user';

type TProtectedRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

type FromState = {
  from?: Location;
};

export default function ProtectedRoute({ children, onlyUnAuth}: TProtectedRouteProps) {
  const location: Location<FromState> = useLocation() as Location<FromState>;

  const user = useAppSelector(userSelectors.user);

  if (onlyUnAuth && user) {
    //Если есть авторизация и страница логина
    const from = location.state?.from || {pathname: AppRoute.Root};
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    //Если нет авторизации и не страница логина
    return <Navigate state={{from: location}} to={AppRoute.Login} />;
  }

  return children; //Все хорошо и рендерим компонент
}
