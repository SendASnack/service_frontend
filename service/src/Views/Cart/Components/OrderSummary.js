import './OrderSummary.css';

const OrderSummary = () => {
    return (
        <div className='order-summary'>
            <span className='order-summary-title'>Order Summary</span>
            <div className='order-summary-quantity'>
                <p>2x Burger Magic</p>
                <p>10.99 €</p>
            </div>
            <div className='order-summary-total'>
                <span>Total</span>
                <p>21.98 €</p>
            </div>
        </div>
    )
}

export default OrderSummary;