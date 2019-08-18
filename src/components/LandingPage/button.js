import React from "react";
import {MyContextConsumer} from "../../containers/Context/MyContext";
import {Link} from "react-router-dom";

function button () {
    return(
        <div>
            <MyContextConsumer>
                {value=>
                <React.Fragment>
                    <button className="Search-button" onClick={value.eventSearch}>
                    <Link to="/event-display" className="buttonText"> 
                    SEARCH</Link></button>
                </React.Fragment>}
            </MyContextConsumer>
        </div>
    )
}

export default button;