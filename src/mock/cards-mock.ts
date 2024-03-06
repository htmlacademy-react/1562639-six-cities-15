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
  location: {latitude: number; longitude: number};
}

export const CARDS_MOCK : PlaceCardProps[] = [{
  name: 'Beautiful &amp; luxurious apartment at great location',
  type: 'Apartment',
  link: '#',
  image: 'img/apartment-01.jpg',
  price: 120,
  rating: 4,
  isFavorite: false,
  isPremium: true,
  id: '1',
  location: {latitude: 52.3909553943508, longitude: 4.85309666406198}
},
{
  name: 'Wood and stone place',
  type: 'Room',
  link: '#',
  image: 'img/room.jpg',
  price: 80,
  rating: 1,
  isFavorite: true,
  isPremium: false,
  id: '2',
  location: {latitude: 52.3609553943508, longitude: 4.85309666406198}
},
{
  name: 'Canal View Prinsengracht',
  type: 'Apartment',
  link: '#',
  image: 'img/apartment-02.jpg',
  price: 132,
  rating: 3,
  isFavorite: false,
  isPremium: false,
  id: '3',
  location: {latitude: 52.3909553943508, longitude: 4.929309666406198}
},
{
  name: 'Nice, cozy, warm big bed apartment',
  type: 'Apartment',
  link: '#',
  image: 'img/apartment-03.jpg',
  price: 180,
  rating: 5,
  isFavorite: true,
  isPremium: true,
  id: '4',
  location: {latitude: 52.3809553943508, longitude: 4.939309666406198}
},
{
  name: 'Wood and stone place',
  type: 'Room',
  link: '#',
  image: 'img/room.jpg',
  price: 80,
  rating: 4,
  isFavorite: true,
  isPremium: false,
  id: '5',
  location: {latitude: 52.3809553943508, longitude: 4.943309666406198}
},
];
