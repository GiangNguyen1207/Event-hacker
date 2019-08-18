import React from "react";
import  "../../containers/LandingPage/LandingPage.css"; 
import { MyContextConsumer } from "../../containers/Context/MyContext"

function Category () {
    return (
        <div>
            <MyContextConsumer>
                {value =>(
                    <React.Fragment>
                        <select onChange={value.setCategory}>
                            <option value="select">-Select-</option>
                            {Object.keys(value.state.categories).map(category => {
                            return (<option key={category}>
                                    {category}</option>
                        )})}
                        </select>   
                    </React.Fragment>
                )}
            </MyContextConsumer>
        </div>
    )
}

export default Category; 