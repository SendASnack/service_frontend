import './Cart.css';
import Navbar from '../../Components/Navbar/Navbar';
import CartHeader from './Components/CartHeader';
import Card from '../../Components/Card/Card';
import CartCardContent from './Components/CartCardContent';
import Button from '../../Components/Button/Button';

const Cart = () => {
    return (
        <div className='cart'>
            <Navbar textClass="checkout-items-number-red" />
            <CartHeader />
            <div className="cart-card">
                <Card title="Products" titleClass="align-left">
                    <CartCardContent />
                </Card>
            </div>
            <div className='checkout-button'>
                <Button class="sign-up" buttonText="Go to checkout" />
            </div>
        </div>
    )
}

export default Cart;