import type {RootState} from '../../types/store';

const selectOffers = (state: RootState) => state.offers.offers;
const selectCity = (state: RootState) => state.offers.city;

export {selectCity, selectOffers};
