import React, {Component} from "react";
import "./Details.css";
import ReactHtmlParser from 'react-html-parser';

class Details extends Component {
    state={
        eventDetails: {},
        loaded: false,
    }

    componentDidMount() {
        const {match : {params}} = this.props
        fetch(`https://www.eventbriteapi.com/v3/events/${params.id}/`, 
        {headers:{"Authorization": "Bearer YOWLUMHD2DEIBGNSZBNW"}
        })
        .then(response => response.json())
        .then(data => this.setState({eventDetails:data, loaded: true}, () => console.log(this.state.eventDetails)))
        .catch(err=>console.log(err))
    
    }

    render() {
        return (
            <div className="container_details">
                {this.state.loaded ?
                    <React.Fragment>
                        <div className="avt row col-sm-10">
                            <img src={this.state.eventDetails.logo.original.url} className="pic" alt="..." />
                        </div>
                        <div className="eventName row col-sm-10">
                            <strong>{ReactHtmlParser(this.state.eventDetails.name.text)}</strong>
                        </div>
                        <div className="des row col-sm-10">
                            <p>Description</p>
                        </div>
                        <div className="content row-col-sm-10">
                            <p>{ReactHtmlParser(this.state.eventDetails.description.html)}</p>
                        </div>
                    </React.Fragment>
                    : <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
            </div>
            
        )
    }
}

export default Details