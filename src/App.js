import './App.css';
import Header from './Header';
import React, {useEffect} from 'react';
import Home from './home/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './checkout/Checkout';
import Login from './authentication/Login';

function App() {

  useEffect(() => {

  }, [])

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
            <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
