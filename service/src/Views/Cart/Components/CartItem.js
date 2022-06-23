import Button from '../../../Components/Button/Button';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className='cart-item'>
            <div className='cart-item-image'>
                <img src={props.image} alt='Burger'></img>
            </div>
            <div className='cart-item-content'>
                <span>{props.name}</span>
                <p>{props.desc}</p>
            </div> 
            <div className='cart-item-price'>
                <p>{props.price} €</p>
            <div className='cart-item-buttons'>
                <Button class="button-plus" buttonText="+"/>
                <Button class="button-plus" buttonText="-"/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;