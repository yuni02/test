import React, {useState} from 'react';
import './Detail_data.css';

function Detail_data(){
    const [data_product, setData_product] = useState(
        <div className="detail_img">
            <img alt="" src="https://image.oliveyoung.co.kr/uploads/images/editor/QuickUpload/C14647/image/20200820154526/qc14_20200820154526.jpg"></img>
            <img alt="" src="https://image.oliveyoung.co.kr/uploads/images/editor/QuickUpload/C14647/image/20200820152023/qc14_20200820152023.jpg"></img>
        </div>
    );
    return (
        <div>
            {data_product}
        </div>
    )
}

export default Detail_data;