import Summary from '../../../Components/Summary/Summary';
import DashedLine from '../../../Components/DashedLine/DashedLine';
import './CheckoutCardContent.css';
import Button from '../../../Components/Button/Button';
import card from './credit.png';

const CheckoutCardContent = (props) => {
    return (
        <div className='checkout-card-content'>
            <div className='address'>
                <span>Delivery Address</span>
                <Button class="button-plus" buttonText="+" />
                <p>{props.address}</p>
            </div>
            <div className='payment'>
                <span>Payment Method</span>
                <Button class="button-plus" buttonText="+" />
                <div className='payment-card'>
                    <img src={card}></img>
                </div>
            </div>
            <DashedLine />
            <Summary total={props.total} />
        </div>
    )
}

export default CheckoutCardContent;