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
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  {name: 'Paris', location: {latitude: 48.85661, longitude: 2.351499, zoom: 12}, slug: 'paris'},
  {name: 'Cologne', location: {latitude: 50.938361, longitude: 6.959974, zoom: 12}, slug: 'cologne'},
  {name: 'Brussels', location: {latitude: 50.846557, longitude: 4.351697, zoom: 12}, slug: 'brussel'},
  {name: 'Amsterdam', location: {latitude: 52.37454, longitude: 4.897976, zoom: 12}, slug: 'amsterdam'},
  {name: 'Hamburg', location: {latitude: 53.550341, longitude: 10.000654, zoom: 12}, slug: 'hamburg'},
  {name: 'Dusseldorf', location: {latitude: 51.225402, longitude: 6.776314, zoom: 12}, slug: 'dusseldorf'}
] as const;

export type CityName = typeof CITIES[number]['name'];

export const IMAGE_LIMIT = 6;
export const NEAR_PLACES_LIMIT = 3;
export const REVIEWS_LIMIT = 10;

export const enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed
}

export const EndPoint = {
  Comments: '/comments',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
};

export const enum CardImageSize {
  WidthBig = '260',
  WidthSmall = '150',
  HeightBig = '200',
  HeightSmall = '110',
}
