import DetailedJobMap from "../detailed-job-map/detailed-job-map"

import "./detailed-job.css";

const processingDescr = (data) => {
  const pointFirst = "Responsopilities:",
        pointSecond = "Compensation & Benefits:";
  let descr, resp, comp, lastPart;

  descr = data.slice(0, data.indexOf(pointFirst));
  resp = data.slice(data.indexOf(pointFirst) + pointFirst.length, data.indexOf(pointSecond));
  comp = data.slice(data.indexOf(pointSecond) + pointSecond.length).split(".")
    .map((item, index, comp) => (index + 1 === comp.length ? '' : <li key={index}>{item}</li>));
  lastPart = comp[comp.length - 1];

  return (
    <>
      <p className="job-details__job-descr-text">{descr}</p>
      <div className="job-details__job-color-text">{pointFirst}</div>
      <p className="job-details__job-descr-text">{resp}</p>
      <div className="job-details__job-color-text">{pointSecond}</div>
      <ul className="job-details__job-descr-list">{comp}</ul>
      <p className="job-details__job-descr-text">{lastPart}</p>
    </>
  )
}

const DetailedJob = (props) => {
  const {title, salary, benefits, pictures, 
        createdAt, description, employment_type, ...itemProps} = props.data,
        {onReturnSelect} = props,
        date = createdAt.slice(0,10).replaceAll("-", "/"),
        employmentTypeProc = employment_type.map((item, index) => 
          (<button key={index} className="additional-info__empl-type additional-info__feature">{item}</button>)),
        benefitsProc = benefits.map((item, index) => 
          (<button key={index} className="additional-info__benefit additional-info__feature">{item}</button>)),
        imagesProc = pictures.map((item, index) => (<img key={index} className="detailed-job__image" src={`${item}?random=${new Date().getTime() + index}`} alt="Company"/>));
  
  return (
    <div className="detailed-job">
      <section className="detailed-job-section">
        <div className="detailed-job-section__header">
          <h1 className="detailed-job__title">Job Details</h1>
          <div className="job-details__actions">
            <div className="job-details__actions job-details__actions-mark">Save to my list</div>
            <div className="job-details__actions job-details__actions-share">Share</div>
          </div>
        </div>

        <button className="apply-btn">Apply now</button>

        <div className="job-details__header">
          <div className="job-details__job-title">{title}</div>
          <div className="job-details__job-salary">
            <div className="job-details__job-color-text">€ {salary}</div>
            <span>Brutto, per year</span>
          </div>
        </div>
        
        <div className="job-details__job-post-date">{date}</div>

        <div className="job-details__job-descr">{processingDescr(description)}</div>
        
        <button className="apply-btn">Apply now</button>
      </section>
      
      <div className="detailed-job-features-sections">
        <section className="detailed-job-section">
          <h1 className="detailed-job__title">Additional info</h1>
          <div className="additional-info__title">Employment type</div>
          <div className="scroll-section">
            {employmentTypeProc}
          </div>
          <div className="additional-info__title">Benefits</div>
          <div className="scroll-section">
            {benefitsProc}
          </div>
        </section>

        <section className="detailed-job-section">
          <h1 className="detailed-job__title">Attached images</h1>
          <div className="scroll-section">
            {imagesProc}
          </div>
        </section>
      </div>
      

      <DetailedJobMap
        data={itemProps}/>

      <button className="return_btn" onClick={() => onReturnSelect('JobList')}>Return to job board</button>
    </div>
  )
}

export default DetailedJob;