export type PlaceCardProps = {
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
  name: string;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

// export type CityList = {
//   name: string;
//   location: {
//     latitude: number;
//     longitude: number;
//     zoom: number;
//   };
//   slug: string;
// };
