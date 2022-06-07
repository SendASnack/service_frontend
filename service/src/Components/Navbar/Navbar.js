import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import logo from './send-logo.png';
import './Navbar.css';
import IconButton from '../IconButton/IconButton';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const [transparent, setTransparent] = useState(true);

    // On scrool, make bg white
    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            // Get scroll position
            if (window.pageYOffset > 30) {
                setTransparent(false);
            } else {
                setTransparent(true);
            }
        });
    }, []);

    return (
        <div className={transparent ? 'navbar' : 'navbar-white'}>
            <div className='navbar-logo'>
                <img src={logo} alt='SendASnack Logo'></img>
            </div>
            <div className='link-items'>
                <ul>
                    <li><Link className='link-item' to='/' >Home</Link></li>
                    <li><Link className='link-item' to='/' >Menu</Link></li>
                    <li><Link className='link-item' to='/orders' >Orders</Link></li>
                    <li><Link className='link-item' to='/profile' >Profile</Link></li>
                </ul>
            </div>
            <div className='checkout-items'>
                <ul>
                    <li className={transparent ? `checkout-items-number ${props.textClass}` : 'checkout-items-number-red'}>+1-650-547-9864</li>
                    <li>
                        <Link to='/login'><Button class="logout" buttonText="login"/></Link>
                    </li>
                    <li>
                        <IconButton icon="fa-solid fa-plus"></IconButton>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;