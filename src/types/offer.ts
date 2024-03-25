import { CityName } from '../constants/const';
import { User } from './review';

export type Offer = {
  environment?: string;
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
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

type OfferWithDetails = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}

export type FullOffer = Offer & OfferWithDetails
