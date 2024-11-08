import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [78.9629, 20.5937], // starting position [lng, lat]
      zoom: 4, // starting zoom
    });
    setMap(mapInstance);

    // Fetch nearby places (example: restaurants around a location)
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?proximity=78.9629,20.5937&access_token=${mapboxgl.accessToken}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNearbyPlaces(data.features);
      });

    return () => mapInstance.remove();
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
      <ul>
        {nearbyPlaces.map((place) => (
          <li key={place.id}>{place.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapPage;
