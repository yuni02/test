import React from "react";
import "./LandingPage.css";

import LandingHeader from "./LandingHeader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function LandingPage() {
  return (
    //<Router>
      <div className="App">
        <LandingHeader />
        <div className="container1">
          <div className="wrapper">
            <div className="home">
              {/* <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch> */}
            </div>
          </div>
        </div>
      </div>
    //</Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
}
export default LandingPage;