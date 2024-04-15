import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from '../private-route/private-route';
import { AppRoute, CITIES } from '../../constants/const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
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
                />
              }
            />
          ))}
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute>
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute onlyUnAuth>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
