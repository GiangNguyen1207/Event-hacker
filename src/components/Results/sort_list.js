import React from "react";
import {MyContextConsumer} from "../../containers/Context/MyContext";

function SortList() {
        return (
            <div>
                <MyContextConsumer>
                    {value=> (
                        <React.Fragment>
                            <p>Sort By:</p>
                            <button 
                                type="button" 
                                className="btn btn-outline-dark mr-sm-2"
                                onClick={value.asc}>Name[A-Z]</button>
                            <button 
                                type="button" 
                                className="btn btn-outline-dark mr-sm-2"
                                onClick={value.dsc}>Name[Z-A]</button>
                        </React.Fragment>
                        )}
                </MyContextConsumer>
            </div>
        )
    }

export default SortList;