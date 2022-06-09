import './BurgerCard.css';
import burger from './burguer.png';
import Button from '../Button/Button';
import RedirectButton from '../RedirectButton/RedirectButton';

const Card = (props) => {
    return (
        <div className='burger-card' data-testid="burger-card">
            <div className='card-image'>
                <img src={burger}></img>
            </div>
            <div className='card-content'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className='card-buttons'>
                <RedirectButton path={props.path} class="order-outline" buttonText="Order now"/>
            </div>
        </div>
    );
}

export default Card;