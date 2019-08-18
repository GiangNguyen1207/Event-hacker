import React, { Component } from 'react';
import './App.css';
import LandingPage from "./containers/LandingPage/LandingPage";
import Header from "./components/Display/Header";
import Result from "./containers/Results/DisplayResults";
import Details from "./containers/Event-details/Details";
import Footer from "./components/Display/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import ProviderComponent from "./containers/Context/MyContext"

class App extends Component {
  render () {
    return (
        <ProviderComponent>
          <BrowserRouter>
            <div className="App">
              <Header />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/event-display" component={Result} /> 
              <Route exact path="/event-details/:id" component={Details} />
              <Footer />
            </div>  
          </BrowserRouter>
        </ProviderComponent>
        
    )
  }
}

export default App;
