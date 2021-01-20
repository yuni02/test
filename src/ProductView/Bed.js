import React, {useState} from 'react';
import Product from '../home/Product';
import product1 from './images/bed_0.jpg';
import product2 from './images/bed_1.jpg';
import product3 from './images/bed_2.jpg';
import Detail from '../detail/Detail';
import Data from './Data'

export const detailContext = React.createContext();

function Bed(){
    const [data, setData] = useState(Data);
    const [img, setImg] = useState([product1, product2, product3]);


    return(
        <div className="bed">
            <div className="bed__row">
                {
                    data.map((a, i)=>{
                        return <Product props={data[i]} image={img[i]} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Bed;