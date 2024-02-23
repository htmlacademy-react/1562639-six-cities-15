export const Setting = {
  ResultCount: 312,
} as const;

export const ComponentEnvironment = {
  Cities: 'cities',
  Favorites: 'favorites',
  NearPlaces: 'near-places',
  Offer: 'offer',
  Header: 'header',
  Footer: 'footer'
} as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
