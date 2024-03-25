import { IMAGE_LIMIT } from '../../../constants/const';
import { FullOffer } from '../../../types/offer';

const OfferGalleryItem = ({ offerImage }: { offerImage: string }) => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={offerImage} alt="Photo studio" />
  </div>
);

type OfferGalleryProps = Pick<FullOffer, 'images'>

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, IMAGE_LIMIT).map((offerImage) => (
          <OfferGalleryItem offerImage={offerImage} key={offerImage} />
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
