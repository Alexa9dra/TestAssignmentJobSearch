import JobListItem from "../job-list-item/job-list-item"

import "./job-list.css";

const JobList = ({data, currentListPage, onJobSelect, onPageSelect}) => {
  const elementsToShow = 10;

  const elements = data.slice(elementsToShow*(currentListPage - 1), elementsToShow*currentListPage).map(item => {
      const {id, ...itemProps} = item;

      return (
          <JobListItem 
              key={id} 
              onJobSelect={() => onJobSelect(id)}
              onPageSelect={() => onPageSelect("DetailedJob")}
              {...itemProps}/>
      );
  })

  return (
      <ul className="job-list">
          {elements}
      </ul>
  )
}

export default JobList;