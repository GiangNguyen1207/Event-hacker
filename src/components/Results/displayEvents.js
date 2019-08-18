import React from "react";
import Event from "../../components/Results/displayEvent";
import pic from "../../images/unavailable.png"
import {MyContextConsumer} from "../../containers/Context/MyContext";
import Pagination from "../Results/pagination"


class displayEvents extends React.Component {
    render() {
    return(
        <div>
            <MyContextConsumer>
                {value=>(
                    value.state.loaded  ? 
                        <React.Fragment>
                            <ul>
                                {value.state.events.length ? value.state.events.map(event => {
                                    return ( 
                                        <li key={event.id}>
                                            <Event
                                                id={event.id} 
                                                pic={event.logo === null ? pic : event.logo.url}
                                                name={event.name.text}
                                                date={
                                                    new Intl.DateTimeFormat('su-FI', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: '2-digit',
                                                    hour:"2-digit",
                                                    minute:"2-digit",
                                                    hour12:false,
                                                    }).format(new Date(event.start.local))}
                                                isFree={event.is_free ? "Free" : "Paid"}
                                                address_id={event.venue_id}
                                            />            
                                        </li>
                                )}): <div style={{textAlign:"center", fontSize: "20px"}}>
                                        No results found
                                </div>}
                            </ul>
                            <Pagination 
                                    totalPages={value.state.totalPages}
                                    onChangePage={value.onChangePage}
                                    currentPage={value.state.currentPage}
                                    getPager={value.getPager}
                                    pageLink={value.state.pager.pages}
                            />
                        </React.Fragment>
                    : <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                            </div>
                    </div> 
                )}
            </MyContextConsumer>
        </div>
    )
}
}

export default displayEvents;