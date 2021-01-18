import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaShoppingBag, FaChair,  FaUserCog, FaCaretDown } from "react-icons/fa";


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
                        <FaChair />
                        Product
                        <FaCaretDown className="product-toggle"/>
                        </h2>
                        <div>
                            <Link to="/seller/product">
                                <p>My Products</p>
                            </Link>
                            <Link to="/seller/addProduct">
                                <p>Add New Product</p>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="navbar__link">
                        <h2>
                        <FaShoppingBag />
                            Order
                        <FaCaretDown />
                        </h2>
                        <div>
                            <Link to="/seller/order">
                                <p>My Orders</p>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="navbar__link">
                        <h2>
                            <FaUserCog />
                            User
                            <FaCaretDown />
                        </h2>
                        <div>
                            <Link to="/seller/user">
                                <p>Check Users</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Navbar
