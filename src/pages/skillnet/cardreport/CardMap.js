import React from 'react'
import GoogleMapReact from 'google-map-react';

const CardMap = () => {

  const defaultProps2 = {
    center: {lat: 59.95,lng: 30.33},
    zoom: 11
  };

  const defaultProps = {
    center: {lat: 39.099728,lng: -94.578568},
    zoom: 5
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects

    //const myLatLng = {lat: 59.955413,lng:30.337844};
    //new maps.Marker({position: {lat: 59.955413,lng:30.337844}, map, title: "Hello World!",});
    new maps.Marker({position: {lat: 30.267153,lng:-97.743057}, map, title: "Austin, TX",});



  };

//   bootstrapURLKeys={{ key: 0 }}
  return (
<div style={{flex:'auto', display:'flex', flexDirection:'row'}}>
      {/* <CardWidget/> */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDv9gi5-vgfA99lixssMPEKrcTHrQLNKDw' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
          <div lat={59.955413} lng={30.337844} text="My Marker"/>
      </GoogleMapReact>
</div>

  )
}

export default CardMap
