import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/const';

type AccessRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const createAccessRoute = (status: AuthorizationStatus, fallback: AppRoute) =>
  function AccessRoute({ authorizationStatus, children }: AccessRouteProps) {
    return (
      authorizationStatus === status
        ? children
        : <Navigate to={fallback} />
    );
  };

const PrivateRoute = createAccessRoute(AuthorizationStatus.Auth, AppRoute.Login);
const PublicRoute = createAccessRoute(AuthorizationStatus.NoAuth, AppRoute.Root);

export {PrivateRoute, PublicRoute};
