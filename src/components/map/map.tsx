import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';

type MapProps = {
  environment: string;
  activeOfferId?: string | null;
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
  offers,
  activeOfferId,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const location = offers[0].city.location;
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
                activeOfferId && offer.id === activeOfferId
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
  }, [activeOfferId, map, offers]);

  return (
    <section className={`${environment}__map map`} ref={mapRef} />
  );
}

export default Map;
