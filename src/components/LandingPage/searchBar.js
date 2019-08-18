import React from "react";
import "../../containers/LandingPage/LandingPage.css";
import { MyContextConsumer } from "../../containers/Context/MyContext"

function searchBar () {
    return (
        <div>
            <MyContextConsumer>
                {value=>(
                    <input 
                    type="text"
                    placeholder="e.g. Marketing..." 
                    onChange={value.setName}/>
                )}
            </MyContextConsumer>
        </div>
    )
}

export default searchBar; 