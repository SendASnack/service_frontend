import './Checkout.css';
import Navbar from '../../Components/Navbar/Navbar';
import ShadowTextHeader from '../../Components/ShadowTextHeader/ShadowTextHeader';
import Card from '../../Components/Card/Card';
import CheckoutCardContent from './Components/CheckoutCardContent';
import RedirectButton from '../../Components/RedirectButton/RedirectButton';
import { useState } from 'react';

const Checkout = (props) => {

    const createOrder = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token")},
        };
        fetch('http://20.77.90.223:8081/api/cart/order', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data: ",data);
                localStorage.setItem('products', '[]');
        })
        setTimeout(() => window.location.replace("/orders"), 1500);
      }

    return (
        <div className='checkout'>
            <Navbar textClass="checkout-items-number-red" />
            <ShadowTextHeader text="Checkout" />
            <div className="cart-card">
                <Card>
                    <CheckoutCardContent address="Wisteria st 30, Houston, TX3830-100" total={localStorage.getItem("totalPrice")} />
                </Card>
            </div>
            <div className='checkout-button'>
                <button onClick={createOrder} className='button sign-up'>Confirm Order</button>
            </div>
        </div>
    )
}

export default Checkout;