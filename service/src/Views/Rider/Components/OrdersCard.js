import './OrdersCard.css';

const OrdersCard = (props) => {
    return (
        <div className='orders-card'>
            <div className='orders-image'>
                <img src='burger3.png'></img>
            </div>
            <div className='orders-products'>
                <div className='orders-products-header'>
                    <h3>Products</h3>
                </div>
                <p>{props.products}</p>
            </div>
            <div className='orders-price'>
                <div className='orders-price-header'>
                    <h3>Price</h3>
                </div>
                <p>{props.price}€</p>
            </div>
            <div className='orders-date'>
                <div className='orders-date-header'><h3>Date</h3></div>
                <p>{props.date}</p>
                <p>15:00</p>
            </div>
        </div>
    )
}

export default OrdersCard;