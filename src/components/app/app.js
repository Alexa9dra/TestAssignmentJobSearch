import {Component} from "react";
import JobList from "../job-list/job-list";
import DetailedJob from "../detailed-job/detailed-job";

import "./app.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            DataisLoaded: false,
            currentPage: "JobList",
            currentListPage: 1
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

    render() {
        const { DataisLoaded, data, currentListPage } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please, wait some time.... </h1> </div> ;
   
        return (
            <div>
                {/* <button onClick={()=>this.setState({currentPage:"JobList"})}>JobList</button> */}
                {this.state.currentPage==="JobList"?<JobList data={data} currentListPage={currentListPage}/>:null}
                {this.state.currentPage === "DetailedJob" ? <DetailedJob /> : null}
            </div>
    );}
}

export default App;