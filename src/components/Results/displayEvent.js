import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

const nameText = {
    color: "#3a3a3a",
    fontSize: "18px",
    fontFamily: "Roboto",
}

const otherText = {
    color: "#808080",
    fontSize: "16px",
    fontFamily: "Roboto",
}

class DisplayEvent extends Component {
    state={
        address:"Unavailable",
        loaded: false
    }

    componentDidMount() {
        if (this.props.address_id) {
        fetch(`https://www.eventbriteapi.com/v3/venues/${this.props.address_id}/`, 
        {headers:{"Authorization": "Bearer YOWLUMHD2DEIBGNSZBNW"}
        })
        .then(response => response.json())
        .then(data => { 
            this.setState({address:data.address.address_1})
            this.setState({loaded:true})
        })
        .catch(err=>console.log(err))
    }}
    
    render() {
        return(  
            <React.Fragment>
                {this.state.loaded ? 
                <div className="card mb-3"><Link to={`/event-details/${this.props.id}`} style={{textDecoration:"none"}}>
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={this.props.pic} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title"style={nameText}>{ReactHtmlParser(this.props.name)}</h5>
                            <p className="card-text" style={otherText}>Date: {this.props.date}</p>
                            <p className="card-text" style={otherText}>Location: {this.state.address}</p>
                            <p className="card-text" style={otherText}>Type: {this.props.isFree}</p>
                        </div>
                        </div>
                    </div></Link>
                </div> 
                : <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                    </div>
                </div> 
                }
            </React.Fragment> 
        )
    }
}

/*class DisplayEvent extends React.Component {
    state = {
        place: null
    }
    componentDidMount(){
        fetch(`https://www.eventbriteapi.com/v3/venues/${this.props.place_id}/`, 
        {headers:{"Authorization": "Bearer YOWLUMHD2DEIBGNSZBNW"}
        })
        .then(res=>res.json())
        .then(data => {
            this.setState({place: data.address.address_1})
        }).catch(err => console.log(err))
    }

    render(){
        const {place} = this.state*/
 
export default DisplayEvent;