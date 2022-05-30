import Button from '../Button/Button';
import logo from './send-logo.png';
import './Navbar.css';
import IconButton from '../IconButton/IconButton';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='SendASnack Logo'></img>
            </div>
            <div className='link-items'>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Orders</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div className='checkout-items'>
                <ul>
                    <li>+1-650-547-9864</li>
                    <li>
                        <Button class="logout" buttonText="logout"/>
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