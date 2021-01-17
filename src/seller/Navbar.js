import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/seller">
                <div className="navbar__logo">
                    <h1>Seller Center</h1>
                </div>
            </Link>
                <div className="navbar__links">
                    <div className="navbar__link">
                        <h2>
                        Product
                        </h2>
                        <Link to="/seller/product">
                            <p>My Products</p>
                        </Link>
                        <Link to="/seller/addProduct">
                            <p>Add New Product</p>
                        </Link>
                    </div>
                    <div className="navbar__link">
                        <h2>
                            Order
                        </h2>
                        <Link to="/seller/order">
                            <p>My Orders</p>
                        </Link>
                    </div>
                    <div className="navbar__link">
                        <h2>
                            User
                        </h2>
                        <Link to="/seller/user">
                            <p>Check Users</p>
                        </Link>
                    </div>
                </div>
                
            </div>
    )
}

export default Navbar
