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
                <div className="addProduct__form">
                    <form  action="" method=" ">
                        <div className="product-description">
                            <label htmlFor="">Product Description</label>
                            <input type="text"/>
                        </div>
                        <div className="price">
                            <label htmlFor="">Price</label>
                            <input type="text"/>
                        </div>
                        <div className="stock">
                            <label htmlFor="">Stock</label>
                            <input type="text"/>
                        </div>
                        {/* <button>Submit</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct