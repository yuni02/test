import React from 'react'
import Logo from './img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider/StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='header'>

            <Link to='/'>
                <img
                className='header__logo'
                src={Logo} alt=""/>
            </Link>

            <div className="header__search">
                <input 
                className="header__searchInput" 
                type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLinetwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLinetwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLinetwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;