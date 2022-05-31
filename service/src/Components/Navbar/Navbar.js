import Button from '../Button/Button';
import logo from './send-logo.png';
import './Navbar.css';
import IconButton from '../IconButton/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='SendASnack Logo'></img>
            </div>
            <div className='link-items'>
                <ul>
                    <li><Link className='link-item' to='/' >Home</Link></li>
                    <li><Link className='link-item' to='/login' >Menu</Link></li>
                    <li><Link className='link-item' to='/orders' >Orders</Link></li>
                    <li><Link className='link-item' to='/profile' >Profile</Link></li>
                </ul>
            </div>
            <div className='checkout-items'>
                <ul>
                    <li>+1-650-547-9864</li>
                    <li>
                        <Link to='sign-up'><Button class="logout" buttonText="logout"/></Link>
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