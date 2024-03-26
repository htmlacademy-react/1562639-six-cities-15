import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { CITIES, CityName } from '../../constants/const';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers';

type MapProps = {
  environment: string;
  city: CityName;
  offers: Offer[];
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({
  environment,
  city,
  offers,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const activeId = useAppSelector(offersSelectors.activeId);
  const location = CITIES.find(({ name }) => name === city)!.location;
  const map = useMap({ mapRef, location});
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
      markerLayer.current.addTo(map);
    }
  }, [location.latitude, location.longitude, location.zoom, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === activeId
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(markerLayer.current);
      });
      const layer = markerLayer.current;
      return () => {
        layer.clearLayers();
      };
    }
  }, [activeId, map, offers]);

  return (
    <section className={`${environment}__map map`} ref={mapRef} />
  );
}

export default Map;
