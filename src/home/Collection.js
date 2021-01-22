import React from 'react'
import './Collection.css'
import livingroom from './images/livingroom.jpg';
import bedroom from './images/bedroom.jpg';
import kitchen from './images/kitchen.jpg';
import bathroom from './images/bathroom.jpg';

import {Link} from 'react-router-dom';

function Collection(){
    return(
      <div className="home_container">
         <p className="title">2021년 컬렉션을 만나보세요</p>     
        <div className="swiper_wrapper">
            <div className="slide_item">
              <a href="#">
              <img src={livingroom}  alt="거실 컬렉션"/>
              <h4>거실 컬렉션</h4>
              </a>
          </div>
            <div className="slide_item">
              <Link to="/bed">
              <img src={bedroom}  alt="침실 컬렉션"/>
              <h4>침실 컬렉션</h4>
              </Link>
            </div>
            <div className="slide_item">
              <a href="#">
              <img src={kitchen} alt="주방 컬렉션"/>
              <h4>주방 컬렉션</h4>
              </a>
            </div>
            <div className="slide_item">
              <a href="#">
              <img src={bathroom} alt="욕실 컬렉션"/>
              <h4>욕실 컬렉션</h4>
              </a>
            </div>
        </div>
    </div>
    )
}

export default Collection;