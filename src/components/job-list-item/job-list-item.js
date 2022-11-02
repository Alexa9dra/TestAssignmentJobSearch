import "./job-list-item.css"

const JobListItem = (props) => {

    const {name, title, address, pictures, createdAt} = props;

    return (
        <li className="job-list-item">
            <div className="job-list-item__content">
                <div>
                    <img className="job-list-item__image" src={`${pictures[0]}?random=${new Date().getTime()}`} alt="Company"/>
                </div>
                <div>
                    <div className="job-list-item__title">{title}</div>
                    <div className="job-list-item__company">Department name • {name}</div>
                    <div>
                        <img className="job-list-item__location" src={require('./../../icons/location_icon.png')} alt="Rate star"/>
                        <span>{address}</span>
                    </div>
                </div>
            </div>
            
            <img src={require('./../../icons/star_icon.png')} alt="Rate star"/>

            <img className="job-list-item__mark" src={require('./../../icons/mark_icon.png')} alt="Mark icon"/>
            <div className="job-list-item__date">{createdAt.slice(0,10).replaceAll("-", "/")}</div>
        </li>
    );
}

export default JobListItem;