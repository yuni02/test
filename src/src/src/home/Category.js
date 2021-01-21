import React from 'react'
import './Category.css'
import cabinet from './images/cabinet.jpg';
import carpet from './images/carpet.jpg';
import furniture from './images/furniture.jpg';
import homedecor from './images/homedecor.jpg';
import kitchen_product from './images/kitchen_product.jpg';
import lamp from './images/lamp.jpg';
import mattress from './images/mattress.jpg';

function Category(){
    return(
        <div className="home_container">
         <p className="title">카테고리</p>
         <div className="swiper_wrapper">
          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={furniture} alt="가구"/>
              <h4>가구</h4>
              </a>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={mattress} alt="침구/매트리스"/>
              <h4>침대/매트리스</h4>
              </a>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={cabinet} alt="수납/정리"/>
              <h4>수납/정리</h4>
              </a>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={kitchen_product} alt="주방가구"/>
              <h4>주방가구</h4>
              </a>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={homedecor} alt="홈데코"/>
              <h4>홈데코</h4>
              </a>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={lamp} alt="조명"/>
              <h4>조명</h4>
              </a>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={carpet} alt="러그"/>
              <h4>러그</h4>
              </a>
            </div>
          </div>

        </div>  
       </div> 
    )
}

export default Category;