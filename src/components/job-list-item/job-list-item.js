import "./job-list-item.css"

const JobListItem = (props) => {

    const {name, title, address, pictures, createdAt, rate = 3, onPageSelect} = props;

    return (
        <li className="job-list-item">
            <div className="job-list-item__content">
                <div>
                    <img className="job-list-item__image" src={`${pictures[0]}?random=${new Date().getTime()}`} alt="Company"/>
                </div>
                <div>
                    <div className="job-list-item__title" onClick={onPageSelect}>{title}</div>
                    <div className="job-list-item__company">Department name • {name}</div>
                    <div>
                        <img className="job-list-item__location" src={require("./../../icons/location_icon.png")} alt="Location icon"/>
                        <span>{address}</span>
                    </div>
                </div>
            </div>
            
            <div className="job-list-item__rate">
                {Array.apply(null, Array(rate ? rate : 0)).map((star, index) => <img key={index} src={require("./../../icons/star_icon.png")} alt="Rate star"/>)}
            </div>

            <img className="job-list-item__mark" src={require("./../../icons/mark_icon.png")} alt="Mark icon"/>
            <div className="job-list-item__date">{createdAt.slice(0,10).replaceAll("-", "/")}</div>
        </li>
    );
}

export default JobListItem;