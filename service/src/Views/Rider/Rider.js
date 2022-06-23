import Navbar from '../../Components/Navbar/Navbar';
import MyOrder from './Components/MyOrder';
import OrdersCard from './Components/OrdersCard';
import './Rider.css';

const Rider = () => {
    return (
        <>
        <Navbar textClass="checkout-items-number-red" />
        <div className='rider-first'>
            <h2 className='rider-header'>My Order</h2>
            <MyOrder />
        </div>
        <div className='rider'>
            <h2 className='rider-header'>Previous Orders</h2>
            <OrdersCard />
            <OrdersCard />
        </div>
        </>
    )
}

export default Rider;