import Button from '../Button/Button';
import burger from './burguer.png';
import './itemShape.css';

const ItemShape = (props) => {
    return (
        <div className={`item-shape ${props.class}`}>
            <div className="item-shape-content">
                <h2>{props.text}</h2>
                <Button class="order-outline" buttonText="order now" />
            </div>
            <div className='item-shape-img'>
                <img src={burger}></img>
            </div>
        </div>
    );
}

export default ItemShape;