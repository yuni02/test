
import Slider from 'react-slick';// slider library
import 'slick-carousel/slick/slick.css'// slider library
import 'slick-carousel/slick/slick-theme.css'// slider library
import React from 'react';
import {Link} from 'react-router-dom';
import main_1 from '../img/main_1.jpg'
import main_2 from '../img/main_2.jpg'
import main_3 from '../img/main_3.jpg'
import main_4 from '../img/main_4.jpg'
import main_5 from '../img/main_5.jpg'
import main_6 from '../img/main_6.jpg'
import main_7 from '../img/main_7.jpg'
import main_8 from '../img/main_8.jpg'
import main_9 from '../img/main_9.jpg'

function Slide() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
}
return (
    <Slider {...settings}>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_1} />
                    
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color1">A</a></li>
                    <li><a href="#" className="color color2">B</a></li>
                    <li><a href="#" className="color color3">C</a></li>
                    <li><a href="#" className="color color4">D</a></li>
                </ul>
                <div className="details">
                    <h2>bookcase<span className="job-title">through the pages of a book</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_9} />
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color5">A</a></li>
                    <li><a href="#" className="color color6">B</a></li>
                    <li><a href="#" className="color color7">C</a></li>
                    <li><a href="#" className="color color8">D</a></li>
                </ul>
                <div className="details">
                    <h2>bed<span className="job-title">The bed</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_3} />
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color9">A</a></li>
                    <li><a href="#" className="color color10">B</a></li>
                    <li><a href="#" className="color color11">C</a></li>
                    <li><a href="#" className="color color12">D</a></li>
                </ul>
                <div className="details">
                    <h2>chair<span className="job-title">a rattan chair</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_2} />
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color13">A</a></li>
                    <li><a href="#" className="color color14">B</a></li>
                    <li><a href="#" className="color color15">C</a></li>
                    <li><a href="#" className="color color16">D</a></li>
                </ul>
                <div className="details">
                    <h2>desk<span className="job-title">an edge of the table</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_5} />
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color1">A</a></li>
                    <li><a href="#" className="color color2">B</a></li>
                    <li><a href="#" className="color color3">C</a></li>
                    <li><a href="#" className="color color4">D</a></li>
                </ul>
                <div className="details">
                    <h2>drawer<span className="job-title">he inside of a drawer</span></h2>
                </div>
            </div>
        </div>
        
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_7} />
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color1">A</a></li>
                    <li><a href="#" className="color color2">B</a></li>
                    <li><a href="#" className="color color3">C</a></li>
                    <li><a href="#" className="color color4">D</a></li>
                </ul>
                <div className="details">
                    <h2>Jkitchen<span className="job-title">kitchen utensils
, kitchenware</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_8} />
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color1">A</a></li>
                    <li><a href="#" className="color color2">B</a></li>
                    <li><a href="#" className="color color3">C</a></li>
                    <li><a href="#" className="color color4">D</a></li>
                </ul>
                <div className="details">
                    <h2>props<span className="job-title"> theaters stage property</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_4} />
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color1">A</a></li>
                    <li><a href="#" className="color color2">B</a></li>
                    <li><a href="#" className="color color3">C</a></li>
                    <li><a href="#" className="color color4">D</a></li>
                </ul>
                <div className="details">
                    <h2>frame<span className="job-title">hang a framed picture on the wall</span></h2>
                </div>
            </div>
        </div>
        
      
    </Slider>
)
}
export default Slide;

//...is called spread operator