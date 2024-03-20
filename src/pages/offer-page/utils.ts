import { CARDS_MOCK } from '../../mock/cards-mock';
import { Offers } from '../../types/offer';

const MAX_NEAR_OFFER = 3;

export const getNearOffers = (offer: Offers): Offers[] => {
  const nearOffers: Offers[] = [];

  for (let i = 0; i < CARDS_MOCK.length; i++) {
    if (CARDS_MOCK[i].id !== offer.id && CARDS_MOCK[i].city.name === offer.city.name) {
      nearOffers.push(CARDS_MOCK[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFER) {
      break;
    }
  }

  return nearOffers;
};
