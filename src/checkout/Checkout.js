import React from 'react'
import banner from '../img/banner.gif';
import { useStateValue } from '../StateProvider/StateProvider';
import "./Checkout.css";
import Subtotal from './Subtotal';
import BasketItem from './BasketItem';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={banner} alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <BasketItem />
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>


            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
