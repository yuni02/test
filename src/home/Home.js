import './Home.css';
import React from 'react';
import Product from './Product';
import lemonjuice from '../img/lemon-juice.jpg'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* make home image */}
                <img 
                className="home__img"
                src={lemonjuice} alt=""/>
            

            <div className="home__row">
                <Product 
                id="1"
                title="양파즙"
                image={lemonjuice}
                description="양파로 즙을 낸 것"
                price={6000}
                hot={1}
                />
                <Product 
                id="2"
                title="양파즙"
                image={lemonjuice}
                description="양파로 즙을 낸 것"
                price={6000}
                rating={1}
                />
                <Product 
                id="3"
                title="양파즙"
                image={lemonjuice}
                description="양파로 즙을 낸 것"
                price={6000}
                rating={1}
                />
                <Product 
                id="4"
                title="양파즙"
                image={lemonjuice}
                description="양파로 즙을 낸 것"
                price={6000}
                rating={1}
                />
                <Product 
                id="5"
                title="양파즙"
                image={lemonjuice}
                description="양파로 즙을 낸 것"
                price={6000}
                rating={1}
                />
            </div>
            </div>
        </div>
    )
}

export default Home;
