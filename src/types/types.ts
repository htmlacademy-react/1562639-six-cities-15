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
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
  };
};

export type Cities = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  slug: string;
};
