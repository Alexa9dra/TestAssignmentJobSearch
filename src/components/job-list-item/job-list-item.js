import "./job-list-item.css"

import * as location_img from "./../../icons/location_icon.png"
import * as mark_img from "./../../icons/mark_icon.png"
import * as star_img from "./../../icons/star_icon.png";

const JobListItem = (props) => {

    const {name, title, address, pictures, createdAt, rating = 3, onJobSelect} = props,
          companyPicture = `${pictures[0]}?random=${new Date().getTime()}`,
          date = createdAt.slice(0,10).replaceAll("-", "/"),
          rate = Array.apply(null, Array(rating ? rating : 0)).map((star, index) => <img key={index} src={star_img.default} alt="Rate star"/>);


    return (
        <li className="job-list-item">
            <div className="job-list-item__content">
                <div>
                    <img className="job-list-item__image" src={companyPicture} alt="Company"/>
                </div>
                <div>
                    <div className="job-list-item__title clickable-element" onClick={onJobSelect}>{title}</div>
                    <div className="job-list-item__company">Department name • {name}</div>
                    <div>
                        <img className="location_icon" src={location_img.default} alt="Location icon"/>
                        {address}
                    </div>
                </div>
            </div>
            
            <div className="job-list-item__rate">
                {rate}
            </div>

            <img className="job-list-item__mark" src={mark_img.default} alt="Mark icon"/>
            <div className="job-list-item__date">{date}</div>
        </li>
    );
}

export default JobListItem;