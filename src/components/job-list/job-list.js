import JobListItem from "../job-list-item/job-list-item";

// import "./employees-list.css";

const JobList = ({data, currentListPage}) => {
  const elementsToShow = 10;

  const elements = data.slice(elementsToShow*(currentListPage - 1), elementsToShow*currentListPage).map(item => {
      const {id, ...itemProps} = item;

      return (
          <JobListItem 
              key={id} 
              {...itemProps}/>
      );
  })

  return (
      <ul>
          {elements}
      </ul>
  )
}

export default JobList;