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
import ProductAnimation from "./Components/ProductAnimation";

const OrderItem = () => {

  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
      setId(localStorage.getItem("product_id"))
      setName(localStorage.getItem("product_title"))
      setDesc(localStorage.getItem("product_text"))
      setPrice(localStorage.getItem("product_price"))
      setCategory(localStorage.getItem("product_category"));
  }, []);

  const addToCart = () => {
    var product_id = localStorage.getItem("product_id");

    if (id) {
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("token")},
      };
      fetch('http://20.77.90.223:8081/api/cart/'+id+'/add', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setShowAnimation(true);
          
          var old_data = JSON.parse(localStorage.getItem('products'));
          old_data.push(JSON.stringify([name, price, category]));

          localStorage.setItem('products', JSON.stringify(old_data));

          setTimeout(() => window.location.replace("/cart"), 2500);
        })
    } else {
      window.location.replace("/");
    }
    localStorage.removeItem("product_id");
    localStorage.removeItem("product_title");
    localStorage.removeItem("product_text");
    localStorage.removeItem("product_price");
    localStorage.removeItem("product_category");
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
      {showAnimation && <ProductAnimation name={name} price={price} />}
    </>
  );
};

export default OrderItem;
