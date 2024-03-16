import { Offers } from '../types/offer';

export const CARDS_MOCK : Offers[] = [{
  name: 'Beautiful &amp; luxurious apartment at great location',
  type: 'Apartment',
  link: '#',
  image: 'img/apartment-01.jpg',
  price: 120,
  rating: 4,
  isFavorite: false,
  isPremium: true,
  id: '1',
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198}
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
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198}
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
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198
  }
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
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198
  }
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
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.3809553943508,
    longitude: 4.943309666406198
  }
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
  id: '6',
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 8
    }
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
  }
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
  id: '7',
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  location: {
    latitude: 50.833557,
    longitude: 4.374696999999999,
  }
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
  id: '8',
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  location: {
    latitude: 50.918461,
    longitude: 6.969974,
  }
},
];
