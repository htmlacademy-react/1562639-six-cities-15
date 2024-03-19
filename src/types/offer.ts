import { CityName } from '../constants/const';

export type Offers = {
  environment?: string;
  title: string;
  type: string;
  previewImage: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  id: string;
  city: City;
  location: Location;
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
