// import "./job-list.css";

const DetailedJob = ({data}) => {
  
  return (
      <ul className="job-list">
          {data.title}
      </ul>
  )
}

export default DetailedJob;