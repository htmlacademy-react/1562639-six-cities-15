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
},
];
