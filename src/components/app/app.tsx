import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import { AppRoute, AuthorizationStatus, CITIES } from '../../constants/const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  const authorization = AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Navigate to={`/${CITIES[0].slug}`} />}
          />
          {CITIES.map((city) => (
            <Route
              key={city.name}
              path={`/${city.slug}`}
              element={
                <MainPage
                  city={city.name}
                  authorizationStatus={authorization}
                />
              }
            />
          ))}
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage
                  authorizationStatus={authorization}
                />
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
            element={
              <OfferPage authorizationStatus={authorization} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
