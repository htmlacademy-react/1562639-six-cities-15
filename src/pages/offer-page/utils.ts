import { offers } from '../../mock/offers';
import { Offer } from '../../types/offer';

const MAX_NEAR_OFFER = 3;

export const getNearOffers = (offer: Offer): Offer[] => {
  const nearOffers: Offer[] = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFER) {
      break;
    }
  }

  return nearOffers;
};
