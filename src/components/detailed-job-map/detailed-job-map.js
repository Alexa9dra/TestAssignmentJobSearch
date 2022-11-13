import Map from "./../map/map";

import "./detailed-job-map.css";

import * as location_img from "./../../icons/location_icon.png";

//Describes and form a map section and contacts information
const DetailedJobMap = (props) => {
    const {name, email, phone, address, location} = props.data;

    return (
        <section className="detailed-job-section">
            <h1 className="detailed-job__title contacts-title">Contacts</h1>

            <section className="map-section">
                <div className="map-section__info">
                    <div className="map-section__content">
                        <p className="map-section__title">
                            Department name.<br/>
                            {name}<br/>
                        </p>

                        <p className="map-section__address">
                            <img className="location_icon" src={location_img.default} alt=""/>
                            {address}<br/>
                        </p>

                        <p className="map-section__contacts">
                            {phone},<br/>
                            {email}<br/>
                        </p>
                    </div>
                </div>

                <Map
                    location={location}/>
            </section>
        </section>
    )
};

export default DetailedJobMap;