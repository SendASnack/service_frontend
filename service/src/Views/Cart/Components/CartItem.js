import Button from '../../../Components/Button/Button';
import './CartItem.css';

const CartItem = () => {
    return (
        <div className='cart-item'>
            <div className='cart-item-image'>
                <img src="burger3.png"></img>
            </div>
            <div className='cart-item-content'>
                <span>Burger Magic</span>
                <p>With Cheese and Ketchup</p>
            </div> 
            <div className='cart-item-price'>
                <p>10.99€</p>
            <div className='cart-item-buttons'>
                <Button class="button-plus" buttonText="+"/>
                <Button class="button-plus" buttonText="-"/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;