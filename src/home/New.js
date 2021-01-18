import React from 'react'
import './New.css'
import new1 from './images/new1.jpg';
import new2 from './images/new2.jpg';
import new3 from './images/new3.jpg';

function New(){

    return(
        <div className="home_container">
        <p className="title">신제품을 만나보세요</p>
        <div className="content">
          <dvi className="new_item">
          <a href="#">
            <img src={new1} alt="신제품"/>
            </a>
          </dvi>
          <dvi className="new_item">
          <a href="#">
            <img src={new2} alt="신제품"/>
            </a>
          </dvi>
          <dvi className="new_item">
          <a href="#">
            <img src={new3} alt="신제품"/>
            </a>
          </dvi>
        </div> 
        </div> 
    )
}

export default New;