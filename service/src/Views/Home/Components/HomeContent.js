import BurgerCard from "../../../Components/BurgerCard/BurgerCard";
import ItemShape from "../../../Components/ItemShape/ItemShape";
import VerticalText from "../../../Components/Text/VerticalText/VerticalText";
import { useState ,useEffect } from "react";
import './HomeContent.css';

const HomeContent = () => {

    const [info, setInfo] = useState(null);

    useEffect(() => {
        let result = [];
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token")},
        };
        fetch('http://localhost:8080/api/products?category=“”&maxPrice=“”', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let arr = [];
                let i = 0;
                arr.push(data);
                arr.map((product) => {
                    result.push(<BurgerCard key={product[i].id} title={product[i].name} text={product[i].description} />);
                    i++;
                })
                setInfo(result);
            });
    }, []);

    return (
        <>
            <div className="home-content" data-testid="home-content">  
                <h3 className="home-content-header">Our Special</h3>
                <h2 className="home-content-title">Dine In + Delivery</h2>
                <VerticalText class="middle dark" text="Menu" />
                <div className="products-cards">
                    {info!==null ? info : null}
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