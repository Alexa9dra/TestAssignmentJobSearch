import { Component } from "react";
import { LoadScript } from '@react-google-maps/api';

import JobList from "../job-list/job-list";
import DetailedJob from "../detailed-job/detailed-job";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            DataisLoaded: false,
            currentPage: "JobList",
            currentJob: '',
            currentListPage: 1,
            listSize: 10
        }
    }

    componentDidMount() {
        fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json,
                    DataisLoaded: true
                });
            })
    }

    onJobSelect = (currentJob, currentPage) => {
        this.setState({currentJob});
        this.setState({currentPage});
        this.goToTop();
    }

    onReturnSelect = (currentPage) => {
        this.setState({currentPage});
        this.goToTop();
    }

    goToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    onListPageSelect = (currentListPage) => {
        if(!(currentListPage === this.state.currentListPage)) {
            this.setState({currentListPage});
            this.goToTop();
        }
    }

    render() {
        const { DataisLoaded, data, currentJob, currentListPage, listSize } = this.state,
              filteredData = (data.filter(item => item.id === currentJob))[0],
              dataAmount = data.length;
        
        if (!DataisLoaded) return <div><h1> Please, wait some time.... </h1></div>;
   
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
}

export default App;