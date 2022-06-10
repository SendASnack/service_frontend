import './Cart.css';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import CartCardContent from './Components/CartCardContent';
import RedirectButton from '../../Components/RedirectButton/RedirectButton';
import ShadowTextHeader from '../../Components/ShadowTextHeader/ShadowTextHeader';

const Cart = () => {
    return (
        <div className='cart'>
            <Navbar textClass="checkout-items-number-red" />
            <ShadowTextHeader text="Cart" />
            <div className="cart-card">
                <Card title="Products" titleClass="align-left">
                    <CartCardContent />
                </Card>
            </div>
            <div className='checkout-button'>
                <RedirectButton path="/checkout" class="sign-up" buttonText="Go to checkout" />
            </div>
        </div>
    )
}

export default Cart;