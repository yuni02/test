import React from 'react'
import './AddProduct.css'

function AddProduct() {
    return (
        <div className="addProduct">
            <div className="addProduct__container">
                <div className="addProduct__container__head">
                    <h1>Add a New Product</h1>
                    <p>Please choose the right category for your product</p>
                </div>
                <div className="addProduct__search">
                    <div className="addProduct__searchbar">
                        <p>Product Name</p>
                        <input type="text"/>
                    </div>
                    <div className="addProduct__category">
                        <p>Category</p>
                        <select>
                            <option value="cake">Cake</option>
                        </select>
                    </div>
                </div>
                <div className="addProduct__info">
                    <h2>0 Product</h2>
                    <button>+ Add a New Product</button>
                </div>
                <div className="addProduct__table">
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

export default AddProduct