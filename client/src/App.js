import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Cities from "./components/location/Cities";
import Mytineraries from "./components/location/itinerary/Mytineraries";
import Activities from "./components/location/itinerary/activity/Activities";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Register} />
              <Route exact path="/cities" component={Cities} />
              <Route
                exact
                path="/mytineraries/:city"
                component={Mytineraries}
              />
              <Route
                exact
                path="/activities/:mytinerary"
                component={Activities}
              />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
