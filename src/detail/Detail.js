import React, { useState } from "react";
import Menu from "./Menu";
import Tabs from "./Tabs";
import {Link} from "react-router-dom";
import Product from "../home/Product";
import product1 from "../img/product-1.jpg";
import product2 from "../img/product-2.jpg";
import product3 from "../img/product-3.jpg";
import "./Detail.css";

function Detail() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(6000);

  return (
    <div className="detail">
      <Menu />
      <div className="detail__product">
        <div className="detail__product_img">
          <img src={product1} className="img" alt=""></img>
        </div>
        <div className="detail__product_info">
          <p className="detail__product_name">립밤</p>
          <p className="detail__product_price">{price}원</p>
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
            총 금액 {price * quantity}원
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
