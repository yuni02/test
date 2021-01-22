import React from 'react'
import './Best.css'
import bed from './images/bed.jpg';
import bookshelf from './images/bookshelf.jpg';
import chair from './images/chair.jpg';
import rug from './images/rug.jpg';
import sofa from './images/sofa.jpg';
import table from './images/table.jpg';

function Best(){
    return(
        <div className="home_container">
        <p className="title">인기상품을 만나보세요</p>
        <div className="content">
          <div className="best_item">
            <a href="#">
            <img src={bed} alt="침대"/>
            </a>
          </div>

          <div className="best_item">
            <a href="#">
            <img src={bookshelf} alt="책장"/>
            </a>
          </div>

          <div className="best_item">
            <a href="#">
            <img src={chair} alt="의자"/>
            </a>
          </div>

          <div className="best_item">
            <a href="#">
            <img src={rug} alt="러그"/>
            </a>
          </div>

          <div className="best_item">
            <a href="#">
            <img src={sofa} alt="소파"/>
            </a>
          </div>

          <div className="best_item">
          <a href="#">
            <img src={table} alt="테이블"/>
            </a>
          </div>

        </div> 
    </div> 
    )
}

export default Best;