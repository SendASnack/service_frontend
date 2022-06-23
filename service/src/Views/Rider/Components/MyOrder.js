import './MyOrder.css';

const MyOrder = () => {
    return (
        <div className='orders-card'>
            <div className='orders-image'>
                <img src='burger3.png'></img>
            </div>
            <div className='orders-products-actual'>
                <div className='orders-products-header'>
                    <h3>Products</h3>
                </div>
                <p>Burger Thief, Burger</p>
            </div>
            <div className='orders-price-actual'>
                <div className='orders-price-header'>
                    <h3>Price</h3>
                </div>
                <p>30.45€</p>
            </div>
            <div className='orders-address'>
                <div className='orders-address-header'>
                <h3>Address</h3>
                </div>
                <p>Wisteria st 30, Houston, TX</p>
            </div>
            <div className='orders-date'>
                <div className='orders-date-header'><h3>Date</h3></div>
                <p>28/05/2022</p>
                <p>15:00</p>
            </div>
            <div className='orders-status'>
            <div className='orders-date-header'><h3>Status</h3></div>
            <p>Delivering</p>
            </div>
        </div>
    )
}

export default MyOrder;