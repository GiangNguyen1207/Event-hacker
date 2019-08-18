import React from "react";
import  "../../containers/LandingPage/LandingPage.css";
import { MyContextConsumer } from "../../containers/Context/MyContext"

function Place () {
    return (
        <div>
            <MyContextConsumer>
                {value=>(
                    <React.Fragment>
                        <input list="places"
                            onChange={value.setPlace}/>
                        <datalist id="places">
                            {value.state.location.map(item => {
                            return (<option key={item.id}>
                                {item.name}
                            </option>)
                        })}
                        </datalist>
                    </React.Fragment>
                )}
            </MyContextConsumer>
            
        </div>
    )
}

export default Place;