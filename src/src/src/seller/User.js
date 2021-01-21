import React, {useState} from 'react'
import './User.css'
import {FaSearch} from 'react-icons/fa';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function User() {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="user">
            <div className="user__container">
                <div className="user__search">
                    <form className="user__searchbar">
                        <input type="text" />
                        <FaSearch className="search-icon"/>
                    </form>
                    <div className="user__category">
                        <p>User Creation Date</p>
                        <DatePicker
                        selected={startDate} 
                        onChange={date => setStartDate(date)} />
                    </div>
                </div>
                <div className="user__button">
                    <button className="search-button">Search</button>
                    <button className="reset-button">Reset</button>
                </div>
                <div className="user__info">
                    <h2>0 Users</h2>
                    <button>+ Add a New User</button>
                </div>
                <div className="user__table">
                    <table>
                        <thead>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40
                        </td>

                            </tr>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40</td>

                            </tr>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User