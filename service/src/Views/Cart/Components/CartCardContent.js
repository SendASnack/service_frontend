import './CartCardContent.css';
import CartItem from './CartItem';
import DashedLine from '../../../Components/DashedLine/DashedLine';
import Summary from '../../../Components/Summary/Summary';

const CartCardContent = () => {
    return(
        <div className='cart-card-content'>
            <CartItem image="burger3.png" name="Burger Magic" desc="With Cheese and Ketchup" price="10.99" />
            <CartItem image="burguer.png" name="Burger Magic" desc="With Ketchup" price="10.99" />
            <DashedLine />
            <Summary total="21.98" />
        </div>
    )
}

export default CartCardContent;