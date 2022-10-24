
import { useMemo } from "react";
import CriarProduto from "../Produto/criarProduto";
import OverlayView from "../OverlayView";
import MapView from '../mapa/mapa'

interface CustomMarkerProps {
  produto: produto.nomeProduto;
  map?: google.maps.Map;
}

export default function CustomMarker({
  produto,
  map,
}: CustomMarkerProps) {
  const price = useMemo(() => {
    return `$ ${hotel.ratesSummary.minPrice.replace(/\.(.*?\d*)/g, '')}`
  }, [produto])
  
  return (
    <>
      {map && (
        <OverlayView
          position={{
            lat: hotel.location.latitude as number,
            lng: hotel.location.longitude as number,
          }}
          map={map}
          styles={{
            backgorundColor: 'DarkGray',
            color: 'white',
          }}
        >
          {/* use a button as the marker */}
          <button onClick={handleClick}>{price}</button>
        </OverlayView>
      )}
    </>
  )
}