import Navbar from '../../Components/Navbar/Navbar';
import OrdersCard from './Components/OrdersCard';
import './Rider.css';

const Rider = () => {
    return (
        <>
        <Navbar textClass="checkout-items-number-red" />
        <div className='rider'>
            <h2 className='rider-header'>Previous Orders</h2>
            <OrdersCard />
            <OrdersCard />
        </div>
        </>
    )
}

export default Rider;