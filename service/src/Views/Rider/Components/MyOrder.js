import './MyOrder.css';

const MyOrder = (props) => {
    return (
        <div className='orders-card'>
            <div className='orders-image'>
                <img src='burger3.png'></img>
            </div>
            <div className='orders-products-actual'>
                <div className='orders-products-header'>
                    <h3>Products</h3>
                </div>
                <p>{props.products}</p>
            </div>
            <div className='orders-price-actual'>
                <div className='orders-price-header'>
                    <h3>Price</h3>
                </div>
                <p>{props.price}€</p>
            </div>
            <div className='orders-date'>
                <div className='orders-date-header'><h3>Date</h3></div>
                <p>{props.date}</p>
            </div>
            <div className='orders-status'>
            <div className='orders-date-header'><h3>Status</h3></div>
            <p>{props.status}</p>
            </div>
        </div>
    )
}

export default MyOrder;