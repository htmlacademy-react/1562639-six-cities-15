import { Offers } from '../../types/offer';

type PriceProps = Pick<Offers, 'price'> & ClassNameProps;
type ClassNameProps = {
  classStart: string;
}

export function Price({price, classStart}:PriceProps) {
  const isPlaceCard = classStart === 'place-card';
  return (
    <div className={`${classStart}__price`}>
      <b className={`${classStart}__price-value`}>€{price}</b>
      {isPlaceCard ? <span className={`${classStart}__price-text`}>/&nbsp;night</span> : <span className={`${classStart}__price-text`}>&nbsp;night</span>}
    </div>
  );
}
