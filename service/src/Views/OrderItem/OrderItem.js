import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import ImageButton from "../../Components/ImageButton/ImageButton";
import Navbar from "../../Components/Navbar/Navbar";
import ShadowText from "../../Components/Text/ShadowText/ShadowText";
import Header from "./Components/Header";
import HeaderImage from "./Components/HeaderImage";
import OrderItemDesc from "./Components/OrderItemDesc";
import "./OrderItem.css";

const OrderItem = () => {
  return (
    <>
      <Navbar textClass="checkout-items-number-red" />
      <div className="order-item">
        <div className="go-back">
          <Button class="default" buttonText="Go Back" />
        </div>
        <Header>
          <ShadowText text="Burger Thief" />
          <HeaderImage image="burguer.png" />
        </Header>
        <div className="center-item-desc">
          <OrderItemDesc
            review="4.8"
            title="Burger Thief"
            text="Lorem ipsum dolor sitamet, consectetur"
            price="10.99"
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
                <Button class="add-to-cart" buttonText="Add to Cart" />
                <Button class="order-outline" buttonText="Review" />
            </div>      
        </Card>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
