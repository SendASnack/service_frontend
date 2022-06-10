import './Checkout.css';
import Navbar from '../../Components/Navbar/Navbar';
import ShadowTextHeader from '../../Components/ShadowTextHeader/ShadowTextHeader';
import Card from '../../Components/Card/Card';
import CheckoutCardContent from './Components/CheckoutCardContent';
import RedirectButton from '../../Components/RedirectButton/RedirectButton';

const Checkout = () => {
    return (
        <div className='checkout'>
            <Navbar textClass="checkout-items-number-red" />
            <ShadowTextHeader text="Checkout" />
            <div className="cart-card">
                <Card>
                    <CheckoutCardContent address="Wisteria st 30, Houston, TX3830-100" />
                </Card>
            </div>
            <div className='checkout-button'>
                <RedirectButton path="/checkout" class="sign-up" buttonText="Confirm Order" />
            </div>
        </div>
    )
}

export default Checkout;