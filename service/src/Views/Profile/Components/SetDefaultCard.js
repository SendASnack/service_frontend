import Button from '../../../Components/Button/Button';
import card from './credit.png';
import './SetDefaultCard.css';

const SetDefaultCard = () => {
    return (
        <div className='set-default-card'>
            <div className='set-default-card-wrapper'>
                <img src={card}></img>
            </div>
            <span className='card-end-date'>Cartão de crédito que termina em **** 4871</span>
            <Button class='set-default' buttonText="set as default" />
        </div>
    );
}

export default SetDefaultCard;