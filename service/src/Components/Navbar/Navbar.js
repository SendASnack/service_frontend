import Button from '../Button/Button';
import logo from './send-logo.png';
import './Navbar.css';

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
                        <Button buttonText="logout"/>
                    </li>
                    <li>
                        <Button buttonText="cart"></Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;