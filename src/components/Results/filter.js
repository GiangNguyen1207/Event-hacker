import React from "react";
import {MyContextConsumer} from "../../containers/Context/MyContext";

function Filter () {
    return (
        <div>
            <MyContextConsumer>
                {value=>{
                    console.log(value)
                    return(
                    <React.Fragment>
                        <p>Filter By:</p>
                        <input 
                            type="checkbox" 
                            id="free" 
                            onChange={value.freeFilter}/>
                        <label htmlFor ="free" className="mr-sm-2"> Free</label> <br />
                        <input 
                            type="checkbox" 
                            id="paid" 
                            onChange={value.paidFilter}/>
                        <label htmlFor ="paid"> Paid</label>
                    </React.Fragment>)
                }}
            </MyContextConsumer>
        </div>
    )
}

export default Filter