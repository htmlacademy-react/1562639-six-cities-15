export const Setting = {
  ResultCount: 312,
} as const;

export const ComponentEnvironment = {
  Cities: 'cities',
  Favorites: 'favorites',
  NearPlaces: 'near-places',
  Offer: 'offer',
} as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}
