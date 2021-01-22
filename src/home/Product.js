import React, {useState, useContext} from 'react'
import fire from '../img/fire.svg';
import './Product.css';
import {useStateValue} from "../StateProvider/StateProvider"
import {useHistory, useParams} from "react-router-dom";

function Product(/*{ id, title, image, description, price , rating}*/props) {
    //dispatch -> how we manipulate with data
    const [{basket}, dispatch] = useStateValue();

    let history = useHistory();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:props.props.id,
                title:props.props.title,
                image: props.image,
                description: props.props.description,
                price: props.props.price,
                rating: props.props.rating
            },
        })
    }
    
    return (
        <div className='product'>
            <div className="product__info">
                <p>{props.props.title}</p>
                <p className="product__price">
                    <small>{props.props.description}</small>
                    <strong>₩{new Intl.NumberFormat().format(props.props.price)}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.props.rating)
                    .fill()
                    .map((_, i) => (
                        <p>
                        {/* <img src={fire} alt=""/> */}
                        </p>
                    ))}
                </div>
            </div>

            <img className="product__img" src={props.image} alt="" onClick={()=>{
                history.push(`/detail/${props.props.id}`);
            }}/> 
            <button onClick={addToBasket}>Add to the List</button>
            
        </div>
    )
}

export default Product;
