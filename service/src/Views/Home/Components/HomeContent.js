import BurgerCard from "../../../Components/BurgerCard/BurgerCard";
import ItemShape from "../../../Components/ItemShape/ItemShape";
import VerticalText from "../../../Components/Text/VerticalText/VerticalText";
import { useState ,useEffect } from "react";
import './HomeContent.css';

const HomeContent = () => {

    const [info, setInfo] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        let array = [];
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token")},
        };
        fetch('http://localhost:8080/api/products?category=&maxPrice=', requestOptions)
            .then(response => response.json())
            .then(data => {
                setInfo(data);
            });

            info.map((product) => {
                array.push(
                    <BurgerCard key={product.id} title={product.name} text={product.description} />
                )
            })
            setResult(array);
    }, []);

    return (
        <>
            <div className="home-content" data-testid="home-content">  
                <h3 className="home-content-header">Our Special</h3>
                <h2 className="home-content-title">Dine In + Delivery</h2>
                <VerticalText class="middle dark" text="Menu" />
                <div className="products-cards">
                    {result}
                </div>
            </div>
            <div className="item-shapes">
                <ItemShape class="orange" text="Chicha Burger"/>
                <ItemShape class="yellow" text="Friend Burger"/>
                <ItemShape class="grill" text="The Grill Thrill"/>
            </div>
        </>
    );
}

export default HomeContent;