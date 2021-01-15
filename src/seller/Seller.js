import React from 'react'
import Navbar from './Navbar'
import SellerProduct from './SellerProduct'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './Seller.css'

function Seller() {
    return (
        <Router>
            <div className="seller">
                <Switch>
                    <Route path='/seller/product'>
                        <Navbar />
                        <SellerProduct />
                    </Route>
                    <Route path='/seller'>
                        <Navbar />
                        
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default Seller
