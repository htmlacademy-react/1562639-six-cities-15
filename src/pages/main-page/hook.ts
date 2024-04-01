import { useEffect } from 'react';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import { offersActions, offersSelectors } from '../../store/slices/offers';
import { CityName, RequestStatus } from '../../constants/const';

export function useFetchCityOffers(city: CityName) {
  const allOffers = useAppSelector(offersSelectors.offers);
  const offersByCity = Object.groupBy(allOffers, (offer) => offer.city.name);
  const offers = offersByCity[city] ?? [];

  const status = useAppSelector(offersSelectors.offersStatus);

  const { fetchAllOffers } = useActionCreators(offersActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchAllOffers();
    }
  }, [fetchAllOffers, status]);

  return {offers, status};
}
