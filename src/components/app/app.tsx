import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import {PrivateRoute, PublicRoute} from '../private-route/private-route';
import { AppRoute, AuthorizationStatus, CITIES } from '../../constants/const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppPageProps = {
  resultCount: number;
}

function App({resultCount} : AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Navigate to='paris' />}
        />
        {CITIES.map((city) => (
          <Route
            key={city.name}
            path={`/${city.slug}`}
            element={<MainPage resultCount={resultCount} />}
          />
        ))}
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PublicRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
