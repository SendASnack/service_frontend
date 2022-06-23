import Navbar from '../../Components/Navbar/Navbar';
import MyOrder from './Components/MyOrder';
import OrdersCard from './Components/OrdersCard';
import { useEffect, useState } from 'react';
import './Rider.css';

const Rider = () => {
    const [info, setInfo] = useState("");
    const [infoOrder, setinfoOrder] = useState("");

    useEffect(() => {
        let array = [];
        const requestOptions = {
          method: "GET",
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        };
        fetch(
          "http://20.77.90.223:8081/api/history",
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message)
            if (data.message === "No available previous orders for the current user.") {
                array.push(
                    <p className='no-orders'>No available previous orders.</p>
                )
            } else {
                Array.from(data.entries()).map((e) => {
                    const [k, v] = e;
                    console.log(v.date);
                    var p = '';
                    Array.from(v.products.entries()).map((e) => {
                        const [k1, v1] = e;
                        p += v1.name;
                    })
                    array.push(
                        <OrdersCard products={p} date={v.date} price={v.totalPrice}/>
                    )
                }
                )
            }
            setInfo(array);
            console.log(data);
          });
      }, []);

      useEffect(() => {
        let array = [];
        const requestOptions = {
          method: "GET",
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        };
        fetch(
          "http://20.77.90.223:8081/api/orders/pending",
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            Array.from(data.entries()).map((e) => {
                const [k2,v2] = e;
                var p ='';
                var date = v2.order.date;
                var price = v2.order.totalPrice;
                var status = "";
                if (v2.orderStatus === null) {
                    status = "PREPARING";
                } else {
                    status = v2.orderStatus;
                }
                Array.from(v2.order.products.entries()).map((e) => {
                    const [k1, v1] = e;
                    console.log("v1 ", v1.name)
                    p += v1.name;
                })
                array.push(
                    <MyOrder products={p} date={date} price={price} status={status}/>
                )
            });
            setinfoOrder(array);
          });
      }, []);

    return (
        <>
        <Navbar textClass="checkout-items-number-red" />
        {infoOrder && <div className='rider-first'>
            <h2 className='rider-header'>My Order</h2>
            {infoOrder}
        </div>}
        {infoOrder ? <div className='rider'>
            <h2 className='rider-header'>Previous Orders</h2>
            {info}
        </div> : <div className='rider-first'>
            <h2 className='rider-header'>Previous Orders</h2>
            <p className='no-orders'>No available previous orders.</p>
        </div>}
        </>
    )
}

export default Rider;