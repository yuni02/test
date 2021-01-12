import React, {useState} from 'react';
import Header from '../Header';
import {Link} from 'react-router-dom';
import product1 from '../img/product-1.jpg'
import product2 from '../img/product-2.jpg'
import product3 from '../img/product-3.jpg'
import './Detail.css';



function Detail() {

    const [quantity, setQuantity] = useState(10);

//    function calc() {
//        quantity()*6000;
//    }

    return(
        <div className="detail">
            <div className="header">
                <Header/>
            </div>

            <div className="menu">
                <ul>
                    <li><Link to=""><span>전체 메뉴</span></Link></li>
                    <li><Link to=""><span>메뉴2</span></Link></li>
                    <li><Link to=""><span>메뉴3</span></Link></li>
                    <li><Link to=""><span>메뉴4</span></Link></li>
                    <li><Link to=""><span>메뉴5</span></Link></li>
                    <li><Link to=""><span>메뉴6</span></Link></li>
                    <li><Link to=""><span>메뉴7</span></Link></li>
                    <li><Link to=""><span>메뉴8</span></Link></li>
                </ul>
            </div>
            <div className="detail_prd">
              <div className="prd_img">
                  <img src={product1} className="img" alt=""></img>
              </div>
              <div className="prd_info">
                  <p className="prd_name">유기농 양파즙</p>
                  <p className="prd_price">6000원</p>
                  <p className="prd_del">배송정보 | 도서산간지역 제외 평균 2~3일 배송</p>
                  <p className="del_price">배송료 정보</p>
                  <p className="del_price_">일반지역 2,500원 / 도서산간지역 4,000원 </p><hr/>
                  <p className="quan">구매수량</p>
                  <p className="quan_"><input type="text"/></p><br/><hr/>
                  <p className="total_price">총 금액</p>
                  <p className="total_price_">원</p>
              </div> 
            </div>
            <hr/>
                <div className="detail_img">
                    <img alt="" src="https://image.oliveyoung.co.kr/uploads/images/editor/QuickUpload/C14647/image/20200820154526/qc14_20200820154526.jpg"></img>
                    <img alt="" src="https://image.oliveyoung.co.kr/uploads/images/editor/QuickUpload/C14647/image/20200820152023/qc14_20200820152023.jpg"></img>
                </div>
        </div>
    )
}





export default Detail;