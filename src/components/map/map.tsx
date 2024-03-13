import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Cities, PlaceCardProps } from '../../types/types';
// import { CITIES } from '../../constants/const';

type MapEnvironment = {
  environment: string;
  city: Cities;
  activeOfferId?: string | null;
  offers: PlaceCardProps[];
}

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

function Map({ environment, city, offers, activeOfferId }: MapEnvironment): JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // const location = useMemo(() => CITIES.find(({name}) => name === city.name) ?.location, [city]);
  const map = useMap({mapRef: mapContainerRef, location: city.location});
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() : void => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon:
              activeOfferId && offer.id === activeOfferId
                ? currentCustomIcon
                : defaultCustomIcon,
          })
          .addTo(markerLayer.current);
      });
    }
  }, [activeOfferId, map, offers]);

  // useEffect(() => {
  //   if (map && location) {
  //     map.panTo([location.latitude, location.longitude]);
  //   }
  // }, [location, map]);

  return (
    <section
      className={`${environment}__map map`}
      ref={mapContainerRef}
    />
  );
}

export default Map;
