import React, {useState} from 'react';
import './Review.css';

function Review(){

    const [user, setUser] = useState(['초롱이','똘똘이','깜찍이']);
    const [review, setReview] = useState(['잘썼어요.','좋았어요','감사해요']);
    const [picture, setPicture] = useState([
        <img alt="" src="https://image.oliveyoung.co.kr/uploads/images/gdasEditor/2020/11/27/1606471983695.png?RS=165x0&CS=165x165"></img>
    ])


    return(
        <div className="review">
            <div className="review__score">
                <div className="review__score_avg">
                    4.7점
                </div>
                <div>
                    <ul className="review__score_list">
                        <li className="five">5점</li>
                        <li className="four">4점</li>
                        <li className="three">3점</li>
                        <li className="two">2점</li>
                        <li className="one">1점</li>
                    </ul>
                </div>
                <div className="review__score_graph">
                    <div>78%</div> 
                    <div>80%</div> 
                    <div>58%</div> 
                    <div>1%</div> 
                    <div>0%</div> 
                </div>
                <div className="review__button">
                    <p>리뷰를 작성해보세요</p>
                    <button>리뷰 작성</button>
                </div>
            </div><hr/>

            {user.map((a,i)=>{
                return(
                <div>
                <li className="review__list">
                <div className="review__list_user">
                    {user[i]}
                </div>
                <div>
                    <div className="review__list_content">
                        {review[i]}
                    </div>
                    <div className="review__list_pictuer">
                    {picture}{picture}
                    </div>
                </div>
            </li><hr/>
            </div>
                )
            })}

               
            </div>
    )
}

export default Review;