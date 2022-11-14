import { Component } from "react";
import { LoadScript } from "@react-google-maps/api";

import JobList from "../job-list/job-list";
import DetailedJob from "../detailed-job/detailed-job";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], //Data for website
            DataIsLoaded: false, //Indicates whether data has been loaded or not
            currentPage: "JobList", //Specifies the page to load
            currentJob: "", //Specifies the job to load
            currentListPage: 1, //Indicates the current list page
            listSize: 6 //Specifies how many records will be on one page of the list
        }
    }

    //Connects to API. When gets data, writes it down and changes DataIsLoaded status
    componentDidMount() {
        fetch("https://63725a6d078587786191eddc.mockapi.io/api/jobsearch/jobs")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json,
                    DataIsLoaded: true
                });
            })
    }

    //Scrolls to the top of the page
    scrollUp = () => {
        window.scrollTo({
            top: 0
        });
    };

    //Sets the info about which page and job details to display
    onJobSelect = (currentJob, currentPage) => {
        this.setState({currentJob});
        this.setState({currentPage});
        this.scrollUp();
    }

    //Sets the info about which page to return to
    onReturnSelect = (currentPage) => {
        this.setState({currentPage});
        this.scrollUp();
    }

    //Sets the info about which list page to load
    onListPageSelect = (currentListPage) => {
        if(!(currentListPage === this.state.currentListPage)) {
            this.setState({currentListPage});
            this.scrollUp();
        }
    }

    render() {
        const { DataIsLoaded, data, currentJob, currentListPage, listSize } = this.state,
              filteredData = (data.filter(item => item.id === currentJob))[0], //Finds the detailes of the chosen job
              dataAmount = data.length; //Number of data records
              
        //Checks if data if loaded. If not, shows the message to user
        if (!DataIsLoaded) return <div><h1> Please, wait some time.... </h1></div>; 

        return (
            <div>
                {this.state.currentPage==="JobList"?
                    <JobList 
                        data={data} 
                        currentListPage={currentListPage}
                        listSize={listSize}
                        dataAmount={dataAmount}
                        onJobSelect={this.onJobSelect}
                        onListPageSelect={this.onListPageSelect}/>
                    :null}
                    
                <LoadScript 
                    googleMapsApiKey="AIzaSyC3xq8wP9YpKE-83e1K7kXHdIP5R6iXYK0">
                    {this.state.currentPage === "DetailedJob" ? 
                        <DetailedJob 
                            data={filteredData}
                            onReturnSelect={this.onReturnSelect}/> 
                        : null}
                </LoadScript>
            </div>
    );}
};

export default App;