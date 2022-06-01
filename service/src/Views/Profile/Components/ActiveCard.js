import './ActiveCard.css';
import card from './credit.png';

const ActiveCard = (props) => {
    return (
        <div className='active-card'>
            <span className='info-data-header'>{props.title}</span>
            <div className='card-image-wrapper'>
                <img src={card}></img>
            </div>
            <p className='card-default'>Default Card</p>
        </div>
    );
}

export default ActiveCard;