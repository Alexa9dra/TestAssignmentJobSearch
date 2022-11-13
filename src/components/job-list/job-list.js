import JobListItem from "../job-list-item/job-list-item";
import NavBar from "../nav-bar/nav-bar";

import "./job-list.css";

//Describes and forms a job list page
const JobList = ({data, currentListPage, onJobSelect, listSize, dataAmount, onListPageSelect}) => {

	//Return a list of data records for current page
	const elements = data.slice(listSize*(currentListPage - 1), listSize*currentListPage).map(item => {
		const {id, ...itemProps} = item;

		return (
			<JobListItem 
				key={id} 
				{...itemProps}
				onJobSelect={() => onJobSelect(id, "DetailedJob")}/>);
	});

	return (
		<section className="job-list-section">
			<style>{"body {background-color: #E6E9F2;}"}</style>

			<ul className="job-list">
				{elements}
			</ul>

			<NavBar
				currentListPage={currentListPage}
				listSize={listSize}
				dataAmount={dataAmount}
				onListPageSelect={onListPageSelect}/>
		</section>
	)
};

export default JobList;