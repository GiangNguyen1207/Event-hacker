import React, {Component} from "react";
import "./LandingPage.css";
import SearchBar from "../../components/LandingPage/searchBar";
import Category from "../../components/LandingPage/category";
import Place from "../../components/LandingPage/place";
import SearchButton from "../../components/LandingPage/button";


class LandingPage extends Component {
    render() {
        return (
            <div className = "landingpage">
                <div className="wrapper">
                    <div className="Category-container">
                        <p className="Category-text">Category</p>
                            <Category />
                    </div>
                    <div className="SearchBar-container">
                        <p className="SearchBar-text">Search event</p>
                            <SearchBar />    
                    </div>
                    <div className="Place-container">
                        <p className="Place-text">Place</p> 
                            <Place />
                    </div>
                    <div className="Search-container">
                            <SearchButton />
                    </div>
                </div>
            </div>
        )
    }
    
}
    

export default LandingPage;