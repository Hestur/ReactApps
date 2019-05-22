import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';


class Map extends Component {
   render() {

       
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 56.1558415, lng: 10.2105643 } }
        defaultZoom = { 13 }
      >
      
    <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 56.1558415, lng: 10.2105643}}
    >
    <InfoWindow
      onLoad={infoWindow => {
        console.log('infoWindow: ', infoWindow)
      }}
      position={{lat: 56.1558415, lng: 10.2105643}}
    >
      <div style={{
    
      }}>
        <h1>Her bor vi: Kannike gade 12 Århus C 8000
        </h1>
        
      </div>
      
    </InfoWindow>
    </Marker>
     />

      </GoogleMap>
   ));
   return(  
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '99vw', margin: '5px 5px 5px 5px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map; 




