import './CartHeader.css';
import ShadowText from '../../../Components/Text/ShadowText/ShadowText';

const CartHeader = () => {
    return (
    <div className='cart-header'>
        <ShadowText text="Cart" />
        <p>Cart</p>
    </div>
    )
}

export default CartHeader;