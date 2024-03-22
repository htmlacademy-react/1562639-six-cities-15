import type {RootState} from '../../types/store';

const selectOffers = (state: RootState) => state.offers;
const selectCity = (state: RootState) => state.city;

export {selectCity, selectOffers};
