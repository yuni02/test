import React, { useState } from 'react';

function QnA(){
    const [question, setQuestion] = useState([
        '이게 궁금해요.', '저게 궁금해요.', '이게저게 궁금해요.'
    ]);
    return(
        <div>
            <h3>문의하실 사항을 작성해주세요.</h3><hr/>
            {
                question.map((a, i)=>{
                    return(
                    <div className="question">
                    <li>
                        {question[i]}<hr/>
                    </li>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default QnA;