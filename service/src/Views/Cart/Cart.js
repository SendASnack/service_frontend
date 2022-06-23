import './Cart.css';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import CartCardContent from './Components/CartCardContent';
import RedirectButton from '../../Components/RedirectButton/RedirectButton';
import ShadowTextHeader from '../../Components/ShadowTextHeader/ShadowTextHeader';
import { useEffect, useState } from 'react';
import CartItem from './Components/CartItem';
import DashedLine from '../../Components/DashedLine/DashedLine';
import Summary from '../../Components/Summary/Summary';

const Cart = () => {
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [totalPrice, setTotalPrice] = useState("");

    const goToCheckout  = () => {
        localStorage.setItem("totalPrice", totalPrice);
        setTimeout(() => window.location.replace("/checkout"), 1500);
    }

    useEffect(() => {
        var result = [];
        var total = 0;
        var array = JSON.parse(localStorage.getItem("products"));
        array.map((item) => {
            total += parseFloat(JSON.parse(item)[1]);
            console.log("category: ", JSON.parse(item)[2])
            if (JSON.parse(item)[2] === "fries") {
                result.push(
                    <CartItem image="fries.png" name={JSON.parse(item)[0]} price={JSON.parse(item)[1]} desc="With Cheese and Ketchup" />
                )
            } else {
            result.push(
                <CartItem image="burger3.png" name={JSON.parse(item)[0]} price={JSON.parse(item)[1]} desc="With Cheese and Ketchup" />
            )
            }
        })
        setInfo(result);
        setTotalPrice(total);
    }, [])

    return (
        <div className='cart' data-testid="cart">
            <Navbar textClass="checkout-items-number-red" />
            <ShadowTextHeader text="Cart" />
            <div className="cart-card">
                <Card title="Products" titleClass="align-left">
                    <CartCardContent>
                        {info}
                        <DashedLine />
                        <Summary total={totalPrice} />
                    </CartCardContent>
                </Card>
            </div>
            <div className='checkout-button'>
                <button onClick={goToCheckout} className='button sign-up'>Go to checkout</button>
            </div>
        </div>
    )
}

export default Cart;