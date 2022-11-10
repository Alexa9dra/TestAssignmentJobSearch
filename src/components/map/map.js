import React from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api';

import "./map.css";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map = ({location}) => {
    return (
        <div className='map-view'>
            <GoogleMap
                options={{mapId: "144cdee64e3e2a11"}}
                mapContainerStyle={containerStyle}
                center={{
                    lat: location.lat+0.1,
                    lng: location.long
                }}
                zoom={10}>
                <MarkerF
                    icon={{url: require("./../../icons/location_icon.png"), scaledSize: { width : 20, height : 30}}}
                    position={{
                        lat: location.lat,
                        lng: location.long
                    }}/>
            </GoogleMap>
        </div>  
    )
}

export default Map;