import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'

function Header(props){
    // console.warn('Header >>>' , props)
    return(
        <div className='header'>
            <Link to="/">
                <img className='amazon-logo' src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="logo" />
            </Link>
            
            <div className='header-search'>
                <input type="text"  className='header-input'/>
                <SearchIcon className='search-icon'/>
            </div>
            
            <div className='header-links'>
                <Link to="/login" className='white'>
                    <div className='header-link'>
                        <span className='header-link1'>Hello Yash</span>
                        <span className='header-link2'>Sign In</span>
                    </div>
                </Link>
                <div className='header-link'>
                    <span className='header-link1'>Return</span>
                    <span className='header-link2'>& Orders</span>
                </div>
                <div className='header-link'>
                    <span className='header-link1'>Your</span>
                    <span className='header-link2'>Prime</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className='basket'>
                    <ShoppingBasketIcon className='basket-icon'/>
                    <span className='basket-count'>{props.data.basket.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;