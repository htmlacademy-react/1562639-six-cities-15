import { CityName } from '../constants/const';

export type Offers = {
  environment?: string;
  name: string;
  type: string;
  link: string;
  image: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  id: string;
  city: City;
  location: {
    latitude: number;
    longitude: number;
  };
};

type City = {
  name: CityName;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
