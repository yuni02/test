import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <div className="navbar">
                <div className="navbar__logo">
                    <h1>Seller Center</h1>
                </div>
                <div className="navbar__links">
                    <div className="navbar__link">
                        <h2>
                        Product
                        </h2>
                        <p>My Products</p>
                        <p>Add New Product</p>
                    </div>
                    <div className="navbar__link">
                        <h2>
                            Order
                        </h2>
                        <p>My Orders</p>
                    </div>
                    <div className="navbar__link">
                        <h2>
                            User
                        </h2>
                        <p>Check Users</p>
                    </div>
                </div>
                
            </div>
    )
}

export default Navbar
