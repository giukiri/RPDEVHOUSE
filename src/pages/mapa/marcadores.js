import { Marker } from "@react-google-maps/api";

const Marcadores = () => {
    if(this.state.render === false){
     this.Marcadores();
    }
    return this.state.locations.map((produto ,id)  => {
     return <Marker
       position={{lat: produto.lat, lng: produto.lng}}
       key={id}
      />
    })
   }

   export default Marcadores;