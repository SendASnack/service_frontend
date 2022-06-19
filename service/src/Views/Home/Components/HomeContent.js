import BurgerCard from "../../../Components/BurgerCard/BurgerCard";
import ItemShape from "../../../Components/ItemShape/ItemShape";
import VerticalText from "../../../Components/Text/VerticalText/VerticalText";
import './HomeContent.css';

const HomeContent = () => {
    return (
        <>
            <div className="home-content" data-testid="home-content">  
                <h3 className="home-content-header">Our Special</h3>
                <h2 className="home-content-title">Dine In + Delivery</h2>
                <VerticalText class="middle dark" text="Menu" />
                <div className="products-cards">
                    <BurgerCard title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                    <BurgerCard title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                    <BurgerCard title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                    <BurgerCard title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                    <BurgerCard title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
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