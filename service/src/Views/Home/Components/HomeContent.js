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
      "http://20.77.90.223:8081/api/products?category=&maxPrice=",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((product) => {
          if (product.category === "FRIES") {
            array.push(
              <BurgerCard
                productInfo={[product.name, product.description, product.price]}
                key={product.id}
                path="order-item"
                image="fries.png"
                product_id={product.id}
                title={product.name}
                text={product.description}
                price={product.price}
                category={product.category}
              />
            );
          } else {
            array.push(
              <BurgerCard
                productInfo={[product.name, product.description, product.price]}
                key={product.id}
                path="order-item"
                image="burguer.png"
                product_id={product.id}
                title={product.name}
                text={product.description}
                price={product.price}
                category={product.category}
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
        <div className="products-cards">{result !== null ? result : <p className="no-products">No Products Available!</p>}</div>
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
