import { GoogleMap, MarkerF } from "@react-google-maps/api";

import "./map.css";

//Sets th map to be 100% of the container size
const containerStyle = {
  width: "100%",
  height: "100%"
};

//Describes and forms a map
const Map = ({location}) => {
    return (
        <div className="map-view">
            <GoogleMap
                options={{mapId: "144cdee64e3e2a11"}}
                mapContainerStyle={containerStyle}
                center={{
                    lat: Number(location[0]) +0.035,
                    lng: Number(location[1])
                }}
                zoom={10}>
                <MarkerF
                    icon={{url: require("./../../icons/location_icon.png"), scaledSize: { width : 20, height : 30}}}
                    position={{
                        lat: Number(location[0]),
                        lng: Number(location[1])
                    }}/>
            </GoogleMap>
        </div>  
    )
};

export default Map;