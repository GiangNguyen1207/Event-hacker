import React, { Component } from "react";
import Events from "../../components/Results/displayEvents";
import Category from "../../components/LandingPage/category";
import Place from "../../components/LandingPage/place";
import search from "../../images/search.png";
import SortList from "../../components/Results/sort_list";
import "./DisplayResult.css";
import {MyContextConsumer} from "../../containers/Context/MyContext"

const text = {
    color:"#3a3a3a",
    fontSize:"14px",
    letterSpacing: "1px",
    padding: "0",
    margin: "10px 0 5px 0",
}

const text1= {
    color:"#3a3a3a",
    fontSize:"24px",
    padding: "0",
    marginTop: "10px",
}

class Results extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper-1">
                    <MyContextConsumer>
                        {value=>(       
                            <React.Fragment>
                                {value.state.eventName && value.state.cat && value.state.placeInput ?
                                    <p style={text1}>
                                        Results: {value.state.eventName.charAt(0).toUpperCase() + value.state.eventName.slice(1)} events 
                                        of {value.state.cat} category 
                                        in {value.state.placeInput}
                                    </p>
                                : null}
                                <button 
                                    className="btn btn-outline-success" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#advanceSearch" 
                                    aria-expanded="false">
                                    <img src={search} alt="..."/> 
                                </button>
                                
                                <div className="collapse" id="advanceSearch">
                                    <form className="form-inline">
                                        <div className="Input">
                                            <p style={text}>EVENT NAME</p>
                                            <input 
                                                className="mr-sm-2"
                                                type="search"
                                                placeholder="e.g. Marketing..." 
                                                onChange={value.setName}/>
                                        </div>
                                        <div className="Category mr-sm-2">
                                            <p style={text}>CATEGORY</p>
                                            <Category />
                                        </div>
                                        <div className="Place mr-sm-2">
                                            <p style={text}>LOCATION</p>
                                            <Place />
                                        </div>
                                        <div className="search">
                                            <button 
                                                type="button" 
                                                className="btn btn-outline-success" 
                                                onClick={value.eventSearch}>Search</button>
                                        </div>
                                    </form>
                                </div>
                            </React.Fragment>
                        )}
                    </MyContextConsumer>
                </div>                
                <div className="row">
                    <div className="sort col-md-2">
                        <div>
                            <SortList />
                        </div>
                    </div>
                    <div className="event_list col-md-10">
                        <Events />
                    </div> 
                </div>   
            </div>
        )
    }
}

export default Results;