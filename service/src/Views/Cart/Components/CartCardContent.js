import './CartCardContent.css';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const CartCardContent = () => {
    return(
        <div className='cart-card-content'>
            <CartItem />
            <CartItem />
            <hr></hr>
            <div className='order-summary'>
            <OrderSummary />
            </div>
        </div>
    )
}

export default CartCardContent;