import { IMAGE_LIMIT } from '../../../constants/const';

const OfferGalleryItem = ({ offerImage }: { offerImage: string }) => (
  <div className="offer__image-wrapper">
    <img
      className="offer__image"
      src={offerImage}
      alt="Photo studio"
    />
  </div>
);

const offerImages : string[] = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'];

function OfferGallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offerImages.slice(0,IMAGE_LIMIT).map((offerImage, i) => <OfferGalleryItem offerImage={offerImage} key={offerImage[i]} />)}
      </div>
    </div>
  );
}

export default OfferGallery;
