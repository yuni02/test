import React, { useState, useContext } from "react";
import Tabs from "./Tabs";
import {Link, useParams} from "react-router-dom";
import Product from "../home/Product";
import product1 from "../ProductView/images/bed_0.jpg";
import product2 from "../ProductView/images/bed_1.jpg";
import product3 from "../ProductView/images/bed_2.jpg";
import "./Detail.css";
import Data from "../ProductView/Data"


function Detail() {

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(Data);
  const [img, setImg] = useState([product1, product2, product3]);

  const {id} = useParams();
  <Product id={id}/>

  return (
    <div className="detail">
      <div className="detail__product">
        <div className="detail__product_img">
          <img src={img[id]} className="img" alt=""></img>
        </div>
        <div className="detail__product_info">
          <p className="detail__product_name">{product[id].title}</p>
          <p className="detail__product_price">{new Intl.NumberFormat().format(product[id].price)}원</p>
          <p className="detail__product_delivery">
            배송정보 | 도서산간지역 제외 평균 2~3일 배송
          </p>
          <p className="detail__product_deliveryPrice">배송료 정보</p>
          <p className="detail__product_deliveryPrice_">
            일반지역 2,500원 / 도서산간지역 4,000원{" "}
          </p>
          <hr />
          <p className="quantity">
            {quantity > 1 ? (
              <button
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
              >
                -
              </button>
            ) : (
              <button
                onClick={() => {
                  setQuantity(quantity);
                }}
              >
                -
              </button>
            )}
            구매수량 {quantity}
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
          </p>
          <p className="detail__product_totalPrice">
            총 금액 {new Intl.NumberFormat().format(product[id].price * quantity)}원
          </p>
          <Link to='/checkout'><button className="detail__keep">장바구니</button>
          </Link>
          <Link to='/payment'>
          <button className="detail__order">주문하기</button>
          </Link>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default Detail;
