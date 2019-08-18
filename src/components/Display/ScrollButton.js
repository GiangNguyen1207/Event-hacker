import React from "react";
import arrowUpWhite from "../../images/arrow-up-white.png"

const scroll = {
    opacity:"0.5",
    backgroundColor: "#666666",
    width: "40px",
    height: "40px",
    position: "fixed",
    bottom: "10px",
    right: "10px",
    borderRadius: "5px",
    border: "none",
}  

const arrowUp = {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-9px",
    marginLeft: "-5px",
}
    
class ScrollButton extends React.Component {
    state = {
          intervalId: 0
    };
    
    scrollStep() {
        if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this));
        this.setState({intervalId: intervalId});
    }
    
    render () {
        return (
            <button 
                title='Back to top' 
                style={scroll} 
                onClick={ () => { this.scrollToTop(); }}>
                    <img src={arrowUpWhite} width="20px" height="20px" alt=""/>   
                    <span style={arrowUp}></span>
            </button>
        )
    }
} 

export default ScrollButton