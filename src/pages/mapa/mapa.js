import { useMemo } from "react"
import {GoogleMap} from '@react-google-maps/api'
import '../mapa/mapa.css'
import Marcadores from "./marcadores";



import React, { useEffect, useRef } from 'react';

function MapView() {
  const mapRef = useRef();
 
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -30.033056, lng: -51.230000 },
      zoom: 8,
    });
  }, []);
  
  return (
  <div ref={mapRef} style={{ width: 1000, height: 1000 }}>
  </div>
 
  )
}

export default MapView;
