import './App.css';
import Header from './Header';
import React, {useEffect} from 'react';
import Home from './home/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './checkout/Checkout';
import Login from './authentication/Login';
//import { auth } from './configuration/firebase';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './payment/Payment'
import Detail from './detail/Detail'

function App() {
  const [{}, dispatch] = useStateValue();

  // useEffect(() => {

  //   auth.onAuthStateChanged(authUser => {
  //     console.log('THE USER IS >>>', authUser)

  //     if (authUser) {
  //       // the user logged in
  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser
  //       })
  //     } else {
  //       //the user is logged out
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null
  //       })
  //     }
  //   })
  // }, [])

            // <Route path="/login">
            //   <Login />
            // </Route>
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Payment />
            </Route>
            <Route path="/detail">
              <Detail/>
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
