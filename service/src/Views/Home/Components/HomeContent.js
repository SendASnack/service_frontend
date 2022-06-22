import BurgerCard from "../../../Components/BurgerCard/BurgerCard";
import ItemShape from "../../../Components/ItemShape/ItemShape";
import VerticalText from "../../../Components/Text/VerticalText/VerticalText";
import { useState, useEffect } from "react";
import "./HomeContent.css";

const HomeContent = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    let array = [];
    let productInfo = [];
    const requestOptions = {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    };
    fetch(
      "http://localhost:8080/api/products?category=&maxPrice=",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((product) => {
          if (product.category === "fries") {
            array.push(
              <BurgerCard
                productInfo={[product.name, product.description, product.price]}
                key={product.id}
                path="order-item"
                image="fries.png"
                title={product.name}
                text={product.description}
                price={product.price}
              />
            );
          } else {
            array.push(
              <BurgerCard
                productInfo={[product.name, product.description, product.price]}
                key={product.id}
                path="order-item"
                image="burguer.png"
                title={product.name}
                text={product.description}
                price={product.price}
              />
            );
          }
        });
        setResult(array);
      });
  }, []);

  return (
    <>
      <div className="home-content" data-testid="home-content">
        <h3 className="home-content-header">Our Special</h3>
        <h2 className="home-content-title">Dine In + Delivery</h2>
        <VerticalText class="middle dark" text="Menu" />
        <div className="products-cards">{result}</div>
      </div>
      <div className="item-shapes">
        <ItemShape class="orange" text="Chicha Burger" />
        <ItemShape class="yellow" text="Friend Burger" />
        <ItemShape class="grill" text="The Grill Thrill" />
      </div>
    </>
  );
};

export default HomeContent;
