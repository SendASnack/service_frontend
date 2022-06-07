import Button from '../../../Components/Button/Button';
import star from './star.png';
import './OrderItemDesc.css';

const OrderItemDesc = (props) => {
    return (
        <div className='order-item-desc'>
            <div className='order-item-stars'>
                <p><img className='star' src={star}></img>{props.review}</p>
            </div>
            <div className='order-item-content'>
                <h2>Burger Thief</h2>
                <p>Lorem ipsum dolor sitamet, consectetur</p>
            </div>
            <div className='order-item-button'>
                <Button class="outline-black" buttonText={`${props.price}€`} />
            </div>
        </div>
    )
}

export default OrderItemDesc;