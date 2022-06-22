import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import ImageButton from "../../Components/ImageButton/ImageButton";
import Navbar from "../../Components/Navbar/Navbar";
import RedirectButton from "../../Components/RedirectButton/RedirectButton";
import ShadowText from "../../Components/Text/ShadowText/ShadowText";
import Header from "./Components/Header";
import HeaderImage from "./Components/HeaderImage";
import OrderItemDesc from "./Components/OrderItemDesc";
import { useEffect, useState } from "react";
import "./OrderItem.css";

const OrderItem = () => {

  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
      console.log("name: ", localStorage.getItem("product_title"));
      console.log("desc: ", localStorage.getItem("product_text"))
      console.log("price: ", localStorage.getItem("product_price"))
      setName(localStorage.getItem("product_title"))
      setDesc(localStorage.getItem("product_text"))
      setPrice(localStorage.getItem("product_price"))
      console.log(name)
      console.log(desc)
  }, []);

  const addToCart = () => {
    localStorage.removeItem("product_title");
    localStorage.removeItem("product_text");
    localStorage.removeItem("product_price");
  }

  return (
    <>
      <Navbar textClass="checkout-items-number-red" />
      <div className="order-item">
        <div className="go-back">
          <RedirectButton class="default" path="/" buttonText="Go Back" />
        </div>
        <Header>
          <ShadowText text={name} />
          
            <HeaderImage image="burguer.png" />
          
        </Header>
        <div className="center-item-desc">
          <OrderItemDesc
            review="4.8"
            title={name}
            text={desc}
            price={price}
          />
        </div>
        <div className="ingredients">
        <Card title="Your Ingredients">
            <div className="ingredients-images">
                <ImageButton image="sauces/cheese.png" text="Cheese" />
                <ImageButton image="sauces/hot-sauce.png" text="Hot Sauce" />
                <ImageButton image="sauces/ketchup.png" imageClass="min-size" text="Ketchup" />
            </div>
            <div className="ingredients-buttons">
                <button className="button add-to-cart" onClick={addToCart}>Add to Cart</button>
                <Button class="order-outline" buttonText="Review" />
            </div>      
        </Card>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
