import Button from "../../Components/Button/Button";
import FilterOption from "../../Components/FilterOption/FilterOption";
import Filters from "../../Components/Filters/Filters";
import Navbar from "../../Components/Navbar/Navbar";
import SearchAndFilters from "../../Components/SearchAndFilters/SearchAndFilters";
import Searchbar from "../../Components/Searchbar/Searchbar";
import VerticalText from "../../Components/Text/VerticalText/VerticalText";
import BurgerCard from "../../Components/BurgerCard/BurgerCard";
import { useState, useEffect } from "react";
import "./Orders.css";

const Orders = (props) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    let array = [];
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
                image="burguer.png"
                title={product.name}
                text={product.description}
                price={product.price}
              />
            );
          }
        });
        console.log(array);
        setResult(array);
      });
  }, []);

  return (
    <>
      <Navbar textClass="checkout-items-number-red" />
      <div className="orders">
        <SearchAndFilters>
          <Searchbar />
          <Filters />
        </SearchAndFilters>
        <FilterOption>
          <Button class="default-selected" buttonText="burgers" />
          <Button class="default" buttonText="fries" />
          <Button class="default" buttonText="beverages" />
          <Button class="default" buttonText="promotions" />
        </FilterOption>

        <div className="orders-content">
          <VerticalText class="middle dark" text="Menu" />
          <div className="products-cards">{result}</div>
        </div>
      </div>
    </>
  );
};

export default Orders;
