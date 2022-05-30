import './Card.css';
import burger from './burguer.png';
import Button from '../Button/Button';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={burger}></img>
            </div>
            <div className='card-content'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className='card-buttons'>
                <Button class="order-outline" buttonText="Order now"/>
            </div>
        </div>
    );
}

export default Card;